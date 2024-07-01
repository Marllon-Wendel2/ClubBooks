import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { getLivros } from '../../servicos/livros'
import { useEffect } from 'react'

const PesquisaContainer = styled.div`
    background-color: #D3D3D3;
    color: #000080;
    text-align: center;
    padding: 60px 0;
    height: 200px;
    width: 50%;
`

const Titulo = styled.h2`
    color: #000080;
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
    background: #ECF0F1;
    margin-left: 10% ;

    p {
        width: 200px;
    }

    img {
        width: 100px;
    }

    &:hover {
        border: 2px solid white;
        background: darkblue;
        color: #FFFFFF;
    }
`
const Posted = styled.div`
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`
const Inicio = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    const [livros, setLivros] = useState([])

    useEffect(() => {
        fetchLivros()
    }, [])

    async function fetchLivros() {
        const livrosDaAPI = await getLivros()
        setLivros(livrosDaAPI)
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
                    <Resultado>
                        <img src={livro.src}/>
                        <p>{livro.titulo}</p>
                    </Resultado>
                ) ) }
            </PesquisaContainer>
    )
}

export default Pesquisa