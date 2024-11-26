import logo from '../../imagens/logo2.webp'
import styled from 'styled-components'


const LogoImage = styled.img`
    border-radius: 400px;
    width:20%;

    @media screen and (max-width: 724px) {
    width: 100%;
    }

     @media (max-width: 1024px) {
        width: 100%;
    }

`

function Logo() {
    return (
            <LogoImage
                src={logo}
                alt='logo' 
            />
    )
}

export default Logo