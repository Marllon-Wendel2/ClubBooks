import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { getLivros } from '../../servicos/livros'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'



const PesquisaContainer = styled.div`
    background-color: #52321D;
    color: #FFFFF;
    text-align: center;
    padding: 60px 0;
    height: 200px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFFFFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    position: absolute;
    background: #C9935A;
    margin-left: 10% ;

    p {
        width: 200px;
    }

    img {
        width: 100px;
    }

    &:hover {
        border: 2px solid white;
        background: #DA6509;
        color: #FFFFFF;
    }
`

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    const [livros, setLivros] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetchLivros()
    }, [])

    async function fetchLivros() {
        const livrosDaAPI = await getLivros()
        setLivros(livrosDaAPI)
    }

    function resultClick(id) {
        navigate(`/livro/${id}`)
    }

    return (
            <PesquisaContainer>
                <Titulo>Procure algo para comentar</Titulo>
                <Subtitulo>Encontre seu livro em nossa estante e interaja</Subtitulo>
                <Input
                    placeholder="Escreva o que está lendo"
                    onChange={evento => {
                        const textoDigitado = evento.target.value

                        if(textoDigitado.length > 2) {
                            const resultadoPesquisa = livros.filter( livro => livro.titulo.includes(textoDigitado))
                            setLivrosPesquisados(resultadoPesquisa)
                        } else {
                            setLivrosPesquisados([])
                        }
                    }}
                    
                />
                { livrosPesquisados.map( livro => (
                    <Resultado onClick={() => {resultClick(livro._id)}}>
                        <img src={livro.src} alt='capa do livro'/>
                        <p>{livro.titulo}</p>
                    </Resultado>

                ) ) }
            </PesquisaContainer>
    )
}

export default Pesquisa