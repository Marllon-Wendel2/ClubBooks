import { livros } from './dadosUltimosLancamentos'
import { Titulo } from '../Titulo'
import CardRecomenda from '../CardRecomenda'
import imagemLivro from '../../imagens/livro2.png' 
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { getComentarios } from '../../servicos/comentarios'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    
    margin-top: 30px;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`
const ComentariosContainer = styled.div`
    display: flex;
    border-radius: 2em;
    padding: 4em 4em;
    background-image: linear-gradient(20deg, #662422 2%, #E6A09A 30%);
    margin: 2px 20px 20px 30px;
    width: 40%;
`
const Usuario = styled.h2 `
    margin: 0 1em;
    font-size: 26px;
    color: white;
    text-transform: uppercase;
    font-weight: 400;
`

const TituloLivro = styled.h3 `
    margin: 1em 3em;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 400;
`

function UltimosLancamentos() {

    const [comentariosDaAPI, setComentario] = useState([])

    useEffect(() => {
        fetchCometarios()
    }, [])

    async function fetchCometarios() {
       const comentariosDaAPI = await getComentarios()
       setComentario(comentariosDaAPI)
    }



    return (
        <UltimosLancamentosContainer>
            <Titulo
                cor="#EB9B00"
                tamanhoFonte="24px"
            >
                O QUE SEUS AMIGOS ESTÃO FALANDO:
            </Titulo>
            <NovosLivrosContainer>
                {comentariosDaAPI.map( comentario => (
                    <ComentariosContainer>
                        <div>
                            <Usuario><strong>{comentario.usuario}</strong> comentou:</Usuario>
                            <TituloLivro>{comentario.livro}</TituloLivro>
                        </div>
                        <div>
                            <button>Exibir</button>
                        </div>
                    </ComentariosContainer>
                ))}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo="Talvez você se interesse por"
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma Google"
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos