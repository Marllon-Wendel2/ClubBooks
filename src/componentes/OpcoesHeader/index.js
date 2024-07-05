import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie';

const Opcao = styled.li`
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0px;
    cursor: pointer;
    min-width: 100px;
    color: #FFFFFF
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
            setOpcoes(['ESTANTE', 'LOGOUT'])
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