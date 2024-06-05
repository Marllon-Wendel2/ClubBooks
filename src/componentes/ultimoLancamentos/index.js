import { livrosLacamentos } from "./dadosUltimosLancamentos"
import styled from "styled-components"
import { Titulo } from "../Titulos"
import CardRecomenda from "../CardRecomenda"
import livro2 from '../../imagens/livro2.png'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimoLancamentos () {
    return (
        <UltimosLancamentosContainer>
            <Titulo 
            cor= "#000"
            tamanhoFonte ="36px"
            >
                ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosLivrosContainer>
            {livrosLacamentos.map( livro => (
                <img src={livro.src}/>
            ))}
            </NovosLivrosContainer>
            <CardRecomenda 
            titulo="Você pode gostar"
            subtitulo="Angular 11"
            descricao="Contruindo uma aplicação com Angular"
            img={livro2}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimoLancamentos