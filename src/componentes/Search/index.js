import styled from "styled-components"
import Input from "../Input"
import { useState } from "react"
import { livros } from "./dadospesquisa"

const SearchContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 40px 0;
    height: 320px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    margin-top: 1.5px;
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
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Search() {
    const [livrosPesquisado, setLivrosPesquisados] = useState([])

    return (
        <SearchContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre o livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Escreva a sua nova leitura"
                onChange={event => {
                    const textoDigitado = event.target.value
                    const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)

                    if(textoDigitado.length <2) {
                        setLivrosPesquisados([])
                    }
                }}
            />
            { livrosPesquisado.map( livro => (
                <Resultado>
                    <p>{livro.nome}</p>
                    <img src={livro.src} />
                </Resultado>
            ) ) }
        </SearchContainer>
    )
}

export default Search