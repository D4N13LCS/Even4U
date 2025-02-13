import styled from "styled-components";
import Carrossel from "./Carrossel";

const MainContent = styled.main`
    
`

const SectionTitle = styled.h1`
    color: var(--cor1);
    margin-left: 25px;

    @media(max-width: 360px){
        font-size: 1.4em;
    }
    @media (min-width: 361px) AND (max-width: 500px){
        font-size: 1.6em;
    }
    @media (min-width: 501px) AND (max-width: 768px){
        font-size: 1.8em;
    }
    @media (min-width: 769px) AND (max-width: 1024px){
        font-size: 2em;
    }
    @media (min-width: 1025px) AND (max-width: 1300px){
        font-size: 2.2em;
    }
    @media (min-width: 1301px){
        font-size: 2.2em;
    }
`



function Main(){
    return (
        <>
            <MainContent>
                <SectionTitle>Eventos destaques</SectionTitle>
                <Carrossel/>
                <SectionTitle>Educacionais</SectionTitle>
                <Carrossel/>
            </MainContent>
        </>
    )
}

export default Main;