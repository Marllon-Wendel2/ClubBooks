import logo from '../../imagens/logo2.png'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 35px;
    color: FFFFFF;
    align-items: center;
    justify-content: center;
    @media (max-width: 724px) {
       width: 100%;
    }
    
`

const LogoImage = styled.img`
    margin-right: 10px;
    width: 30%;
    @media (max-width: 1024px) {
        width: 80%;
        margin-right: 1px;
        padding: 0;
        display: block;
    }
`
const HeaderTitulo = styled.p`
    margin: 0;

    @media screen and (max-width: 1024px) {
        width: 10%;
        display: none;
    }

`

function Logo() {
    return (
        <LogoContainer>
            <LogoImage
                src={logo}
                alt='logo' 
            />
            <HeaderTitulo><strong>CLUB</strong>BOOKS</HeaderTitulo>
       </LogoContainer>
    )
}

export default Logo