const db = require('../db').pool;
const nodemailer = require('nodemailer');
const {google} = require('googleapis');
const jwt = require('jsonwebtoken');
const path = require('path');
require('dotenv').config({ path: __dirname + '/../.env' });

class Eventos{

    listar(req, res){
        db.getConnection((err, conex)=>{
            if(err){
                conex.release();
                return res.status(500).send({err})
            }

            conex.query('select * from eventos', (err, result)=>{
                conex.release();
                if(err){
                    return res.status(500).send(err)
                }

                return res.status(200).send({result})

            })

        })    
    }

    listar_especifico(req, res){
        db.getConnection((err, conex)=>{
            if(err){
                conex.release();
                return res.status(500).send({err})
            }

            conex.query('select e.* from eventos e left join inscricoes i on i.id_evento = e.id_evento where i.id = ?', [req.params.id], (err, result)=>{
                conex.release();
                if(err){
                    return res.status(500).send(err)
                }

                return res.status(200).send({result})

            })

        })    
    }

    criar_token(req, res, next){
        const token = jwt.sign({nome: req.body.nome, email: req.body.email}, process.env.SECRET, {expiresIn: '1h'})

        req.token = token;

        next();

    }

    enviar_confirmacao(req, res){
        
        db.getConnection((err, conex) => {
            if (err) {
                conex.release();
                return res.status(500).send({ err });
            }
            
            conex.query(
                'INSERT INTO inscricoes(nome, cpf, id_evento, token) VALUES(?, ?, ?, ?)',
                [req.body.nome, req.body.cpf, req.body.id_evento, req.token],
                async (err, result) => {
                    conex.release();
                    if (err) return res.status(500).send({ err });
        
                    const link = `http://localhost:3000/eventos/ExibirInscricao/${result.insertId}`;
        
                    const oAuth2 = new google.auth.OAuth2({
                        clientId: process.env.CLIENT_ID,
                        clientSecret: process.env.CLIENT_SECRET,
                        redirectUri: 'https://developers.google.com/oauthplayground'
                    });
                    
                    oAuth2.setCredentials({
                        refresh_token: process.env.REFRESH_TOKEN,
                    });
        
                    const accessToken = await oAuth2.getAccessToken();
        
                    const transport = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            type: 'OAUTH2',
                            user: 'danielmazzini6@gmail.com',
                            clientId:process.env.CLIENT_ID,
                            clientSecret: process.env.CLIENT_SECRET,
                            refreshToken: process.env.REFRESH_TOKEN,
                            accessToken: accessToken.token,
                        }
                    });
        
                    const mailOptions = {
                        from: 'danielmazzini6@gmail.com',
                        to: req.body.email,
                        subject: 'Confirmação de Evento',
                        text: `Olá ${req.body.nome},\n\n Clique no link abaixo para confirmar sua inscrição: "${req.body.titulo}".\n
                        Detalhes:\n
                        ${req.body.data}\n
                        Localidade: ${req.body.localidade}\n
                        CPF: ${req.body.cpf}\n\n \n confirmar em: ${link}`,
                    };
        
                    await transport.sendMail(mailOptions);
                    return res.status(200).json({ message: 'Inscrição realizada! Confira seu e-mail para confirmar.' });
                }
            );
        });
        

    }

    ExibirInscricao(req, res){
        const id = req.params.id;
        db.getConnection((err, conex)=>{
            if(err){ return res.status(500).send({err})}

            conex.query('select token from inscricoes where id = ? ',
                [id],
                (err, result)=>{
                    conex.release();
                    if(err){return res.staus(500).send({err})}
                    
                    try {
                        jwt.verify(result[0].token, process.env.SECRET);    
                    } catch (error) {
                        return res.status(500).send(error)
                    }

                    return res.render('../pages/confirmInsc', {id: req.params.id});
                }
            )

            


        })
    }

    confirmarInscricao(req, res){
        db.getConnection((err, conex)=>{
            if(err){return res.status(500).send({err})}

            conex.query('update inscricoes set is_confirmed = 1  where id = (?)', [req.body.id], (err, result)=>{
                conex.release();
                if(err){return res.status(500).send({err})}

                return res.status(200).send({message: 'email confirmado com sucesso!'})
 
            })

        })
    }

    cancelarInscricao(req, res){
        db.getConnection((err, conex)=>{
            if(err){
                conex.release();
                return res.status.send({err})
            }

            conex.query('delete from inscricoes where id = ?', 
                [req.body.id], (error, result)=>{
                    conex.release();
                    if(error){return res.status.send({error})}

                    return res.status(200).send({result, message: 'Inscrição cancelada com sucesso!'})
                })
        })
    }

}

module.exports = {Eventos}