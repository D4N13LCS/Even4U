import styled from 'styled-components';

const BannerContainer = styled.div`
    display: flex;
    justify-content: center;
    
`

const Banner  = styled.header`
    display: flex;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 0.25px 1px 3.5px 1px rgba(0, 0, 0, 0.39);

    @media(max-width: 360px){
        width: 15em;
        flex-direction: column;
        margin-top: 2em;
    }

    @media (min-width: 361px) AND (max-width: 500px){
        margin-top: 2em;
        flex-direction: column;
        width: 18.5em;
    }
    @media (min-width: 501px) AND (max-width: 768px){
        max-width: 480px;
    }
    @media (min-width: 769px) AND (max-width: 1024px){
        max-width: 560px;
    }
    @media (min-width: 1025px) AND (max-width: 1300px){
        max-width: 610px;
    }
    @media (min-width: 1301px){
        max-width: 670px;
    }
   
`

const BannerImg = styled.img`
    height: 100%;
    border-radius: 10px 0px 0px 10px;

    @media(max-width: 360px){
        max-width: 100%;
        border-radius: 10px 10px 0px 0px;
    }
    @media (min-width: 361px) AND (max-width: 500px){
        width: 100%;
        height: 8em;
        border-radius: 10px 10px 0px 0px;
    }
    @media (min-width: 501px) AND (max-width: 768px){
        width: 15em;
    }
    @media (min-width: 769px) AND (max-width: 1024px){
        width: 18em;
    }
    @media (min-width: 1025px) AND (max-width: 1300px){
        width: 20em;
    }
    @media (min-width: 1301px){
        width: 22em;
    }
`

const BannerDiscription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    padding: 1em 2.5em;
`

const BannerTitle = styled.h1`
    @media(max-width: 360px){
        font-size: 1em;
    }
    @media (min-width: 361px) AND (max-width: 500px){
        font-size: 1.2em;
    }
    @media (min-width: 501px) AND (max-width: 768px){
        font-size: 1.4em;
    }
    @media (min-width: 769px) AND (max-width: 1024px){
        font-size: 1.6em;
    }
    @media (min-width: 1025px) AND (max-width: 1300px){
        font-size: 1.8em;
    }
    @media (min-width: 1301px){
        font-size: 2em;
    }
`

const BannerInfo = styled.p`
    width: 100%;
    @media(max-width: 360px){
        font-size: 12px;
    }
    @media (min-width: 361px) AND (max-width: 500px){
        font-size: 13px;
    }
    @media (min-width: 501px) AND (max-width: 768px){
        font-size: 14px;
    }
    @media (min-width: 769px) AND (max-width: 1024px){
        font-size: 16px;
    }
    @media (min-width: 1025px) AND (max-width: 1300px){
        font-size: 16px;
    }
    @media (min-width: 1301px){
        font-size: 18px;
    }
`

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
`

const FormsTitle = styled.h1`
    text-align: center;
    @media(max-width: 360px){
        font-size: 1.25em;
    }
    @media (min-width: 361px) AND (max-width: 500px){
        font-size: 1.5em;
    }
    @media (min-width: 501px) AND (max-width: 768px){
        font-size: 1.7em;
    }
    @media (min-width: 769px) AND (max-width: 1024px){
        font-size: 1.9em;
    }
    @media (min-width: 1025px) AND (max-width: 1300px){
        font-size: 2em;
    }
    @media (min-width: 1301px){
        font-size: 2.2em;
    }
`

const Forms = styled.form`
    display: flex;
    flex-direction: column; 
    align-items: center;
    gap: 1em;
    margin: 3em;
    padding: 10px;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 0.25px 1px 3.5px 1px rgba(0, 0, 0, 0.39);
    
    @media(max-width: 360px){
        width: 15em;
    }
    @media (min-width: 361px) AND (max-width: 500px){
        max-width: 18em;
    }
    @media (min-width: 501px) AND (max-width: 768px){
        width: 29em;
    }
    @media (min-width: 769px) AND (max-width: 1024px){
        width: 33.5em;
    }
    @media (min-width: 1025px) AND (max-width: 1300px){
        width: 37em;
    }
    @media (min-width: 1301px){
        width: 40.5em;
    }
`

const CamposContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75em;
`

const FormsCampo = styled.input`
    padding: 4px;
    width: 33em;
    border: 1px solid black;
    border-radius: 4px;
    &:focus{ 
        outline: none;
        border: 1px solid var(--cor4);
        box-shadow: 0px 0px 3.5px 0px var(--cor4);
    }

    @media(max-width: 360px){
        width: 15em;
    }
    @media(min-width: 361px) AND (max-width: 500px){
        width: 20em;
    }
`

const Button = styled.button`
    padding: 4px;
    border: 1px solid black;
    border-radius: 6px;
    background-color: var(--cor2);
    color: white;
    width: 34em;
    &:hover{
        cursor: pointer;
        background-color: var(--cor4);
    }
    
    @media(max-width: 360px){
        width: 16em;
    }

    @media(min-width: 361px) AND (max-width: 500px){
        width: 21em;
    }
`

function FormEvent(props){

    async function enviar_inscricao(){
    
        const email = document.getElementById('email').value;
        const nome = document.getElementById('nome').value;
        const cpf = document.getElementById('cpf').value;
        const data = document.getElementById('data').innerHTML;
        const localidade = document.getElementById('localidade').innerHTML;
        
        
        try {
            const response = await fetch("http://backend:3000/eventos/enviarConfirmacao", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({id_evento: props.id_evento, titulo: props.nome, data: data, email: email, nome: nome, cpf: cpf, localidade: localidade}),
                
            });

            const info = await response.json();
            alert(info.message);
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            <BannerContainer>
                <Banner>
                    <BannerImg src='https://www.billboard.com/wp-content/uploads/2024/04/Events-calendar-2024-billboard-1548.jpg?w=942&h=623&crop=1'/>
                
                <BannerDiscription>
                    <BannerTitle id="titulo" className="dados">{props.nome}</BannerTitle>
                    <BannerInfo id="data" className="dados">
                        data: {new Date(props.data).toLocaleDateString()}
                    </BannerInfo>
                    <BannerInfo id="localidade" className="dados">
                        {props.cidade} - {props.estado}
                    </BannerInfo>
                </BannerDiscription>
                </Banner>
            </BannerContainer>
            <FormContainer>
                <Forms>
                    <FormsTitle>Inscrição</FormsTitle>
                    <CamposContainer>
                        <FormsCampo id="email" className="dados" placeholder='E-mail'/>
                        <FormsCampo id="nome" className="dados" placeholder='Nome completo'/>
                        <FormsCampo placeholder='Idade'/>
                        <FormsCampo id="cpf" className="dados" placeholder='CPF'/>
                    </CamposContainer>
                    <Button onClick={(evt)=>{
                        evt.preventDefault();
                        enviar_inscricao();
                        }}>Realizar inscrição</Button>
                </Forms>
            </FormContainer>
        </>
    )
}

export default FormEvent;