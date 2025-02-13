const express = require('express');
const router = express.Router();
const EventosController = require('../controllers/eventosController').Eventos;
const Eventos = new EventosController();

router.get('/listar', (req, res)=>{
    return Eventos.listar(req, res)
})

router.get('/listarEspecifico/:id', (req, res)=>{
    return Eventos.listar_especifico(req, res);
})

router.post('/enviarConfirmacao', Eventos.criar_token, (req, res)=>{
    return Eventos.enviar_confirmacao(req, res)
})

router.get('/ExibirInscricao/:id', (req, res)=>{
    return Eventos.ExibirInscricao(req, res)
})

router.patch('/confirmarInscricao', (req, res)=>{
    return Eventos.confirmarInscricao(req, res)
})

router.delete('/cancelarInscricao', (req, res)=>{
    return Eventos.cancelarInscricao(req, res)
})

module.exports = {router};