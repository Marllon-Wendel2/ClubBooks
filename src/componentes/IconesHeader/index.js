import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const InconesContainer = styled.ul`
    display: flex;
    align-items: center;
    padding: 0;


`
const InconeContainer = styled.li`
    margin-right:  40px;
    width: 25px;
    padding: 0;
`
const incones = [perfil, sacola]

function IconesHeader () {
    return (
        <InconesContainer>
            {incones.map( (img) => (
                <InconeContainer><img src={img} alt="icones"></img></InconeContainer>
        ))}
       </InconesContainer>
    )
}
export default IconesHeader;