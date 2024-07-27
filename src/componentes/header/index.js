import Logo from '../logo'
import OpcoesHeader from '../opcoesHeader';
import IconesHeader from '../iconesHeader';
import styled from 'styled-components';
import { Link } from "react-router-dom"


const HeaderContainer = styled.header`
        background-color: #C9935A;
        display: flex;
        justify-content: center;
        @media (max-width: 724px) {
        width: 123%;
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