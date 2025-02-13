import styled from "styled-components";
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom'

const ContainerCarrossel = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
    margin: 20px  0px;
`



const CarrosselContent = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 1em;
    padding: 10px;
    position: relative;
`

const ContainerImg = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4em;
    border: 1px solid transparent;
    border-radius: 0px 0px 5px 5px;
    box-shadow: 0.25px 1px 3.5px 1px rgba(0, 0, 0, 0.39);

    &:hover{
        border-color: var(--cor3);
        transition: 225ms ease-in-out;
    }

    &.hidden{
        display: none;
        // position: absolute;
        // left: -800px;
    }

    &.visible{
        display: flex;
        // left: 0px;
        transition: 200ms ease-in-out;
    }

    @media (min-width: 361px) AND (max-width: 500px){
        width: 220px;
        
    }
    @media (min-width: 501px) AND (max-width: 768px){
        width: 35vw;
        
    }
    @media (min-width: 769px) AND (max-width: 1024px){
        width: 25vw;
    }
    @media (min-width: 1025px) AND (max-width: 1300px){
        width: 20vw;
    }
    @media (min-width: 1301px){
        width: 14vw;
    }
`

const Img = styled.img`
    width: 100%;
    height: 100px;
    border: 1px solid black;
    
`

const TitleEvent = styled.h1`
    font-size: 0.9em;
    color: var(--cor2);
    width: 100%;
    padding-left: 1.8em;
    
    @media (min-width: 769px) AND (max-width: 1024px){
        font-size: 1em;
    }
    @media (min-width: 1024px) AND (max-width: 1300px){
        font-size: 1.1em;
    }
`

const InfoContainer = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.3em;
    width: 100%;
`

const Info = styled.li`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    font-size: 0.75em;
    gap: 7.5px;
    padding-left: 1em;

    @media(max-width: 360px){
        font-size: 10px;
    }
    @media (min-width: 361px) AND (max-width: 500px){
        font-size: 11px;
        
    }
    @media (min-width: 501px) AND (max-width: 768px){
        font-size: 12.5px;
    }
    @media (min-width: 769px) AND (max-width: 1024px){
        font-size: 13px;
    }
    @media (min-width: 1025px) AND (max-width: 1300px){
        font-size: 13.5px;
    }
    @media (min-width: 1301px){
        font-size: 13.5px;
    }
`

const InfoIcon = styled.span`

    @media (max-width: 360px){
        font-size: 16px;
    }
    @media (min-width: 361px) AND (max-width: 500px){
        font-size: 18px;
    }
    @media (min-width: 501px) AND (max-width: 768px){
        font-size: 20px;
    }
    @media (min-width: 769px) AND (max-width: 1024px){
        font-size: 22px;
    }
    @media (min-width: 1025px) AND (max-width: 1300px){
        font-size: 24px;
    }
    @media (min-width: 1301px){
        font-size: 24px;
    }
`

const ButtonInscricao = styled.button`
    font-family: poppins;
    font-weight: 600;
    padding: 7px;
    width: 90%;
    color: var(--cor1);
    background-color: rgba(95, 95, 95, 0.07);
    border-radius: 7px;
    margin-bottom: 10px;
    border: 0px;
    &:hover{
        cursor: pointer;
        background-color: var(--cor1);
        color: white;
    }


    @media (max-width: 500px){
        font-size: 12px;
    }

`
const Seta = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15px;
    width: 15px;
    padding: 10px; 
    color: gray;
    background-color: rgba(95, 95, 95, 0.07);
    border-radius: 50%;

    &:hover{
        cursor: pointer;
        color: white;
        background-color: var(--cor1);
    }

    &.hidden{
        display: none;
    }
`

function Carrossel(){
    
    const navigate = useNavigate();
    const [eventos, setEventos] = useState([]);

    const [index, setIndex] = useState(5);
    const [itemPorPagina, setItemPorPagina] = useState(5);
    const [loading, setLoading] = useState(true);

    async function listar_vagas() {
        try{
            const response = await fetch('http://localhost:3000/eventos/listar')
            const data = await response.json()
            setEventos(data.result);
            ajustarCarrossel();
        }catch(err){    
            console.log(err)
        }finally{
            setLoading(false);
        }
    
    }

    function avancar(evt){
        const setaEsq = evt.target.previousSibling.previousSibling;
        setaEsq.classList.remove('hidden');

        if(index !== eventos.length) {
            setIndex(index + itemPorPagina);
        }
        if (index >= eventos.length - itemPorPagina){
            evt.target.classList.add('hidden');
            setaEsq.classList.remove('hidden');
        }

    }
    
    function retroceder(evt){
        const setaDir =  evt.target.nextSibling.nextSibling;
        setaDir.classList.remove('hidden');
        if(index !== 0) {
            itemPorPagina < index?setIndex(index - itemPorPagina):'';
        }
        if (index === itemPorPagina * 2){
            setaDir.classList.remove('hidden');
            evt.target.classList.add('hidden');
        }

    }

    function Inscrever(e){
        navigate('/Inscrição', {state: {id_evento: e.id_evento, titulo: e.titulo, data: e.data_evento, cidade: e.cidade, estado: e.estado}});
    }

    function ajustarCarrossel(){
        const setas = [...document.getElementsByClassName('setinha')];

        setas.forEach((el, i)=>{
            el.classList.contains('hidden') && i / 3 == 1 || i === 1?el.classList.remove('hidden'):el.classList.add('hidden');
        })

        if ( window.innerWidth <= 549){
            setIndex(1)
            setItemPorPagina(1)
        }
        else if (window.innerWidth <= 790){
            setIndex(2)
            setItemPorPagina(2)
        }else if (window.innerWidth <= 1024){
            setIndex(3)
            setItemPorPagina(3)
        }else if (window.innerWidth <= 1300){
            setIndex(4)
            setItemPorPagina(4)
        }else if (window.innerWidth <= 1500){
            setIndex(5)
            setItemPorPagina(5)
        }else{
            setIndex(6)
            setItemPorPagina(6)
        }
    }


    useEffect(() => {
        setTimeout(()=>{
            listar_vagas()
        },1000)
    
        window.addEventListener('resize', ajustarCarrossel);
    
        return () => {
            window.removeEventListener('resize', ajustarCarrossel);
        };
    }, []);
    
    
    

    return(
        <>{ !loading?
            <ContainerCarrossel id="containerCarrossel">
            <Seta onClick={(evt)=>{
                retroceder(evt);
            }} className="material-symbols-outlined hidden setinha">
                    chevron_left
                </Seta>
                <CarrosselContent className="content">
                        {
                        eventos.slice(index - itemPorPagina, index).map((el)=>{
                            
                            return(
                                <ContainerImg key={el.titulo} className='visible'>
                                    <Img src='https://www.billboard.com/wp-content/uploads/2024/04/Events-calendar-2024-billboard-1548.jpg?w=942&h=623&crop=1'/>
                                    <TitleEvent>{el.titulo}</TitleEvent>
                                    <InfoContainer>
                                        <Info>
                                            <InfoIcon className='material-symbols-outlined'>
                                                calendar_month
                                            </InfoIcon>
                                            <p>{ new Date(el.data_evento).toLocaleDateString()}</p>
                                        </Info>
                                        <Info>
                                            <InfoIcon className='material-symbols-outlined'>
                                                location_on
                                            </InfoIcon>
                                            <p> {el.cidade} - {el.estado}</p>
                                        </Info>
                                    </InfoContainer>
                                    <ButtonInscricao onClick={()=>{Inscrever(el)}}>Inscrever-se</ButtonInscricao>
                                </ContainerImg>
                                )
                        })
                        
                       
                    }
                    
                </CarrosselContent>
                <Seta className="material-symbols-outlined setinha" onClick={(evt)=>{avancar(evt)}}>
                    chevron_right
                </Seta>
            </ContainerCarrossel>: <p>Carregando eventos...</p>}
        </>
    )
}

export default Carrossel;
