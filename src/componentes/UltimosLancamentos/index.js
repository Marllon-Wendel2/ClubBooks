import { Titulo } from '../Titulo'
import CardRecomenda from '../CardRecomenda'
import imagemLivro from '../../imagens/livro2.png' 
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { getComentarios } from '../../servicos/comentarios'

const PostCompleto = styled.section`
    background-color: #ECF0F1;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    height: 100%;
`

const NovosLivrosContainer = styled.div`
    display: flex;
    margin-top: 30px;
    width: 100%;
    cursor: pointer;
    justify-content: center;
    align-items: center;
`
const ComentariosContainer = styled.div`
    display: flex;
    border-radius: 2em;
    padding: 4em 4em;
    background-color: #2ECC71;
    margin: 2px 20px 20px 30px;
    width: 40%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`
const Usuario = styled.h2 `
    margin: 0 1em;
    font-size: 26px;
    color: white;
    text-transform: uppercase;
    font-weight: 400;
`

const TituloLivro = styled.h3 `
    margin: 1em 1em;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 400;
    color: #DAA520;
`

const Button = styled.button`
  background-color: #DAA520
  color: #FFFFFF;
  border: 2px solid #DAA520;
  border-radius: 0px;
  padding: 18px 36px;
  display: inline-block;
  font-family: "Lucida Console", Monaco, monospace;
  font-size: 14px;
  letter-spacing: 1px;
  cursor: pointer;
  box-shadow: inset 0 0 0 0 #000080;
  transition: ease-out 0.4s;
    &:hover {
        box-shadow: inset 0 0 0 50px #000080;
        color: white;
        }
`
const ComentarioConteudo = styled.div `
    background-color: #A3E4D7;
    color: #000080;
    padding: 1em;
    margin: 5%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 2em;
`

const Capa = styled.img `
    width: 20%;
    height: 10%;
    margin-right: 5%;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`

function UltimosLancamentos() {

    const [comentariosDaAPI, setComentario] = useState([])
    const [comentiosVisiveis, setComentariosVisiveis] = useState({})

    const togglesComentarios = (livroId, ComentarioIndex) => {
        setComentariosVisiveis(prevState => ({
            ...prevState,
            [livroId]: {
                ...prevState[livroId],
                [ComentarioIndex]: !prevState[livroId]?.[ComentarioIndex]
            }
        }));
    }

    useEffect(() => {
        fetchCometarios()
    }, [])

    async function fetchCometarios() {
       const comentariosDaAPI = await getComentarios()
       console.log(comentariosDaAPI)
       setComentario(comentariosDaAPI)
    }



    return (
        <PostCompleto>
            <Titulo
                cor="#EB9B00"
                tamanhoFonte="24px"
            >
                O QUE SEUS AMIGOS ESTÃO FALANDO:
            </Titulo>
            <NovosLivrosContainer>
                {comentariosDaAPI.map( livro => (
                    <ComentariosContainer key={livro._id}>
                        <Capa src={livro.src}/>
                    {livro.comentarios.map( (comentario, index) => (
                        <div key={comentario.autor}>
                            <Usuario><strong>{comentario.autor}</strong> comentou:</Usuario>
                            <TituloLivro>{livro.titulo}</TituloLivro>
                            <div>
                                <Button onClick={() => togglesComentarios(livro._id, index)}>{
                                    comentiosVisiveis[livro._id]?.[index]? 'Ocultar' : 'Exibir'}
                                </Button>
                            </div>
                            {comentiosVisiveis[livro._id]?.[index] && (
                                <ComentarioConteudo>
                                    <p>{comentario.conteudo}</p>
                                </ComentarioConteudo>
                            )}
                        </div>
                    ))}
                    </ComentariosContainer>
                ))}
            </NovosLivrosContainer>
        </PostCompleto>
    )
}

export default UltimosLancamentos