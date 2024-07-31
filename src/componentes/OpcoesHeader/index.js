import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie';

const Opcao = styled.li`
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0px;
    cursor: pointer;
    width: 100px;
    color: #FFFFFF
    @media (max-width: 1024px) {
       width: 4em;
    }
`

const Opcoes = styled.ul`
    display: flex;
`

function OpcoesHeader() {
    const [opcoesHeader, setOpcoes] = useState([])
    const [logado, setLogado] = useState(false)

    useEffect(() => {
        const accessToken = Cookies.get('accessToken')
        setLogado(!!accessToken) //convertendo o valor para bolean
    }, [])

    useEffect(() => {
        if(!logado) {
            setOpcoes(['LOGIN', 'REGISTRAR'])
        } else {
            setOpcoes(['HOME', 'ESTANTE', 'LOGOUT'])
        }
    }, [logado])

    return (
        <Opcoes>
            { opcoesHeader.map( (texto) => (
                <Link to={`/${texto.toLowerCase()}`} key={texto} ><Opcao><p>{texto}</p></Opcao></Link>
            ) ) }
      </Opcoes>
    )
}

export default OpcoesHeader