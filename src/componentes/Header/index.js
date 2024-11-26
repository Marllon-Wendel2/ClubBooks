import Logo from '../logo'
import OpcoesHeader from '../opcoesHeader';
import IconesHeader from '../iconesHeader';
import styled from 'styled-components';
import { Link } from "react-router-dom"


const HeaderContainer = styled.header`
        background-color: #C9935A;
        display: flex;
        justify-content: space-around;
        align-itens: center; 
        padding: 1em;
        @media screen and (max-width: 724px) {
            width: 100%;
        }
`

function Header () {
    return (
    <HeaderContainer>
        <Link to={`/`}>
        <Logo/>
        </Link>
        <OpcoesHeader/>
        <IconesHeader/>
    </HeaderContainer>
    )
}

export default Header