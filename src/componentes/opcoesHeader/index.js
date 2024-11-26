import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie';

const Opcao = styled.li`
    font-size: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    cursor: pointer;
    width: 100px;
`

const Opcoes = styled.ul`
    display: flex;
    gap: 50px;
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