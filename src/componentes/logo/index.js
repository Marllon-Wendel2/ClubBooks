import logo from '../../imagens/logo2.png'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 35px;
    color: FFFFFF;
    align-items: center;
    text-align: center;
    
`

const LogoImage = styled.img`
    margin-right: 10px;
    width: 30%
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImage
                src={logo}
                alt='logo' 
            />
            <p><strong>CLUB</strong>BOOKS</p>
       </LogoContainer>
    )
}

export default Logo