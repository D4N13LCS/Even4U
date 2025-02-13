import styled from "styled-components";
import logo from "../assets/evenlogo.png";

const Nav = styled.nav`
    display: flex;
    align-items: center;
    color: var(--cor4);
    background-color: var(--cor5);
    gap: 10px;
    padding: 10px 20px;
    margin-bottom: 2em;
`

const Ul = styled.ul`
    display: flex;
    gap: 1em;
`

const Li = styled.li`
    list-style-type: none;
    padding: 3.5px;
    font-size: 1em;
    &:hover{
        cursor: pointer;
        color: white;
        background-color: var(--cor4);
        border-radius: 5px;
    }

    @media(max-width: 360px){
        font-size: 0.8em;
    }
    @media (min-width: 361px) AND (max-width: 500px){
        font-size: 0.9em;
        
    }
`

const Img = styled.img`
    height: 35px;

    @media(max-width: 360px){
        height: 28px;
    }
    @media (min-width: 361px) AND (max-width: 500px){
        height: 31px;
        
    }
`

function Navbar(props){
    return(
        <>
            <Nav>
                <Img src={logo} alt="" />
                <Ul>
                    <Li>{props.opc1}</Li>
                    <Li>{props.opc2}</Li>
                </Ul>
            </Nav>
        </>
    )
}

export default Navbar;