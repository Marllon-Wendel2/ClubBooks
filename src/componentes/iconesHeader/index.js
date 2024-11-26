import { useNavigate } from 'react-router-dom'
import perfil from '../../imagens/perfil.svg'
import styled from 'styled-components'
import Cookies from 'js-cookie'

const InconesContainer = styled.ul`
    display: flex;
    align-items: center;
    width: 80%;
`
const InconeContainer = styled.li`
    cursor: pointer;
`
const incones = [perfil]

function IconesHeader () {
    const navigate = useNavigate()
    const usuario = Cookies.get('usuario')

    const handleIconClick = () => {
        if (usuario) {
            navigate(`/usuario/${usuario}`);
        }
    };

    return (
        <InconesContainer>
            {incones.map( (img) => (
                <InconeContainer onClick={handleIconClick}><img src={img} alt="icones"></img></InconeContainer>
        ))}
       </InconesContainer>
    )
}
export default IconesHeader;