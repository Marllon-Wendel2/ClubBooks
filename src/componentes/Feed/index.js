import { Titulo } from '../titulo' 
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { getComentarios } from '../../servicos/comentarios'
import { useNavigate } from 'react-router-dom'
import imgFundo from '../../img/Backgroundiphone.jpeg'

const PostCompleto = styled.section`
    background-image: url(${imgFundo});
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    height: 100hz;

    @media screen and (max-width: 724px) {
    width: 100%;
    }
`

const NovosLivrosContainer = styled.div`
    display: flex;
    margin-top: 30px;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`
const ComentariosContainer = styled.div`
    display: flex;
    border-radius: 2em;
    padding: 4em 4em;
    background-color: #52321D;
    margin: 2px 20px 20px 30px;
    width: 40%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    @media (max-width: 1024px) {
        width: 70%;
    }
    
     @media screen and (max-width: 724px) {
    width: 60%;
    }
`
const Usuario = styled.h2 `
    margin: 0 1em;
    font-size: 26px;
    color: white;
    text-transform: uppercase;
    font-weight: 400;

     @media screen and (max-width: 724px) {
        font-size: 16px
    }
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
  font-size: 14px;
  letter-spacing: 1px;
  cursor: pointer;
  box-shadow: inset 0 0 0 0 #000080;
  transition: ease-out 0.4s;
    &:hover {
        box-shadow: inset 0 0 0 50px #000080;
        color: white;
        }
    
    @media screen and (max-width: 724px) {
        font-size: 10px
    }
`
const ComentarioConteudo = styled.div `
    background-color: #A3E4D7;
    color: #000080;
    padding: 1em;
    margin: 5%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 2em;

    @media screen and (max-width: 724px) {
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
        font-size: 16px;
        padding-left: 4em;
        margin: 0;
        position: absolute;
    }
`

const Capa = styled.img `
    max-width: 100px;
    max-height: 150px;
    margin-right: 5%;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`

function FeedComentarios() {
    const navigate = useNavigate()

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

    const handleClick = (id) => {
        navigate(`/livro/${id}`)
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
                    livro.comentarios && livro.comentarios.length > 0 && (
                        <ComentariosContainer key={livro._id}>
                        <Capa src={livro.src}/>
                    {  livro.comentarios.map( (comentario, index) => (
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
                                    <Button onClick={() => handleClick(livro._id)}>RESPONDER</Button>
                                </ComentarioConteudo>
                            )}
                        </div>
                    ))}
                    </ComentariosContainer>
                    )
                ))}
            </NovosLivrosContainer>
        </PostCompleto>
    )
}

export default FeedComentarios