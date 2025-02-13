import styled from 'styled-components';
import linkdin from '../assets/linkdinIcon.png';
import github from '../assets/githubIcon.png';
import insta from '../assets/instagram.png';


const FooterEl = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: end;
    flex-wrap: wrap;
    gap: 2em;
    background-image: linear-gradient(to bottom,rgb(0, 0, 0),rgb(156, 156, 156));
`

const Div = styled.div`
    display: flex;
    align-items: end;
    gap: 0.3em;
    height: 100px;
    color: white;
    font-family: poppins;
    font-weight: 200;

`

const Icone = styled.img`
    height: 24px;
    &:hover{
        cursor: pointer; 
    }
    
    @media(max-width: 360px){
        height: 20px;
    }
    @media (min-width: 769px) AND (max-width: 1024px){
        height: 26px;
    }
    @media (min-width: 1025px) AND (max-width: 1300px){
        height: 28px;
    }
    @media (min-width: 1301px){
        height: 30px;
    }
`

const Sobre = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 3px;
    list-style-type: none;
`

const TopicosSobre = styled.li`
    color: rgb(156, 156, 156);
    font-size: 0.85em;
    &:hover{
        cursor: pointer;
        color: white;
    }
    
    @media(max-width: 360px){
        font-size: 0.7em;
    }
    @media (min-width: 361px) AND (max-width: 500px){
        font-size: 0.75em;
        
    }
    @media (min-width: 501px) AND (max-width: 768px){
        font-size: 0.8em;
    }
`

const Privacidade = styled.ul`
    display: flex;
    flex-direction: column; 
    gap: 3px;
    list-style-type: none;
`

const TopicosPrivacidade = styled.li`
    color: rgb(156, 156, 156);
    font-size: 0.85em;
    &:hover{
        cursor: pointer;
        color: white;
    }

    @media(max-width: 360px){
        font-size: 0.7em;
    }
    @media (min-width: 361px) AND (max-width: 500px){
        font-size: 0.75em;
        
    }
    @media (min-width: 501px) AND (max-width: 768px){
        font-size: 0.8em;
    }
`

const NameContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;
    font-size: 0.85em;
    color: rgba(255, 255, 255, 0.67);
    
    @media(max-width: 360px){
        font-size: 0.7em;
    }
    @media (min-width: 361px) AND (max-width: 500px){
        font-size: 0.75em;
        
    }
    @media (min-width: 501px) AND (max-width: 768px){
        font-size: 0.8em;
    }
    `

const Name = styled.div`
    color: var(--cor5);
    &::after{ 
        content: "4U";
        color: var(--cor4);
    }
`

function Footer(){
    return(
    <>
        <FooterEl>
            <Sobre>
                <TopicosSobre>Missão</TopicosSobre>
                <TopicosSobre>Visão</TopicosSobre>
                <TopicosSobre>Valores</TopicosSobre>
            </Sobre>
            <Privacidade>
                <TopicosPrivacidade>Cookies</TopicosPrivacidade>
                <TopicosPrivacidade>Termos de uso</TopicosPrivacidade>
            </Privacidade>
            <Div>
                <Icone src={linkdin} alt="" />
                <Icone src={github} alt="" />
                <Icone src={insta} alt="" />
            </Div>
            <NameContainer>
            &copy;2025 <Name>Even</Name>
            </NameContainer>
        </FooterEl>
    </>
    )
}

export default Footer;

// ©2025 McDonald’s. All rights reserved