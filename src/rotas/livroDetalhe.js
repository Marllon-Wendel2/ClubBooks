import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLivrosPorId } from "../servicos/livros";
import Cookies from "js-cookie";
import styled from "styled-components";
import imgComment from "../img/comment-solid.svg"
import imgTrash from "../img/trash-solid.svg"
import imgPen from "../img/pen-solid.svg"
import { deleteComentario, postComentario, putComentario } from "../servicos/comentarios";

let usuarioLogo = Cookies.get('usuario');

const Livro = styled.h1`
    margin: 1em 0;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 400;
    color: #DAA520;
    text-align: center;
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

     img {
    width: 24px;
    height: 24px;
  }
`

const Pagina = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
    background-color: #A3E4D7;
    min-height: 100vh;
    width: 100%;
`

const Capa = styled.img`
    width: 20%;
    height: auto;
    margin-bottom: 2em;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`

const Autor = styled.h3`
    margin: 0.5em 0;
    font-size: 26px;
    color: white;
    text-transform: uppercase;
    font-weight: 400;
`
const ComentarioConteudo = styled.div `
    background-color: #A3E4D7;
    color: #000080;
    padding: 1em;
    margin: 0.5em 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 2em;
    width: 100%;
`
const ComentariosContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 2em;
    padding: 2em;
    background-color: #2ECC71;
    margin: 1em 0;
    width: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  background-color: #A3E4D7;
  padding: 10px 10px 10px 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 5px 0 20px 20px;
  
  `;

const FormContainerTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #A3E4D7;
  padding: 10px 10px 10px 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 5px 0 20px 20px;
  
  `;
  
const InputComentario = styled.textarea`
  display: flex;
  margin: 10px 0;
  padding: 10px;
  width: 200%;
  border: 1px solid #DAA520;
  border-radius: 5px;
  font-size: 16px;
  height: 150px;
  resize: vertical;
  margin-bottom: 20px;
  `;
  
  
const SubmitButton = styled(Button)`
  width: 100%;
`;


function LivroDetalhe() {
    const {id}  = useParams()

    const [livro, setLivro] = useState({})
    const [comentarios, setComentarios] = useState([])
    const [showForm, setForm] = useState(null)
    const [conteudo, setConteudo] = useState(null)
    const[conteudoAtualizado, setAtualizado] = useState(null)
    const [formComentarioNovo, setNovoComentario] = useState(false)

    useEffect(() => {
        fetchLivro(id)
    },[id])

    function fetchComentarios (comentarios) {
        setComentarios(comentarios)

    }

    async function fetchLivro(id) {
        const livro = await getLivrosPorId(id)
        setLivro(livro)
        fetchComentarios(livro.comentarios)
    }


async function deletaComentario(event, idLivro, idComentario) {
    event.preventDefault()
    await deleteComentario(idLivro, idComentario)
    window.location.reload()
    
}

async function alteraComentario(event, idLivro, idComentario) {
    event.preventDefault();
    const conteudo = {conteudo: conteudoAtualizado};
    await putComentario(idLivro, idComentario, conteudo )
    window.location.reload()
}

const handleComentarioSubmit = async (event) => {
  event.preventDefault();
    
    const novoComentario = {autor: usuarioLogo, conteudo: conteudo}

    await postComentario(livro._id, novoComentario )

    window.location.reload()
}


    return (
        <Pagina>
            <Livro>{livro.titulo}</Livro>
            <Capa src={livro.src}></Capa>
            <Button onClick={() => showForm ? setForm(false) : setForm(true)}><img src={imgComment} alt="ComentarioIcon"/></Button>
        { showForm ?(
            <FormContainer onSubmit={handleComentarioSubmit} >
                <form>
                    <InputComentario
                        type='text' 
                        placeholder='Seu comentarios'
                        onChange={(e) => setConteudo(e.target.value)}
                    ></InputComentario>
                    <SubmitButton type="submit">Adiconar</SubmitButton>
                </form>
            </FormContainer>) : null
        }
        {comentarios.slice().reverse().map( comentario => (
            <ComentariosContainer>
            <Autor>{comentario.autor} comentou:</Autor>
            <ComentarioConteudo>{comentario.conteudo}</ComentarioConteudo>
            {
                comentario.autor === usuarioLogo ?
            <div>
                {
                formComentarioNovo ?(
            <FormContainerTwo >
                <form onSubmit={(event) => alteraComentario(event, livro._id, comentario.id)}>
                    <InputComentario
                        type='text' 
                        placeholder='Seu comentarios'
                        onChange={(e) => setAtualizado(e.target.value)}
                        ></InputComentario>
                        <button type="submit">Adiconar</button>
                </form>
            </FormContainerTwo>) : null}
                <Button onClick={(event) => deletaComentario(event, livro._id, comentario.id)}><img src={imgTrash} alt="ComentarioIcon"/></Button>
                <Button 
                onClick={(event) =>
                    formComentarioNovo ?
                    setNovoComentario(false) :
                    setNovoComentario(true)
                }><img src={imgPen} alt="ComentarioIconLapis"/></Button>
            </div>
            
            : null
            }
            </ComentariosContainer>
        ))}
        </Pagina>
    );
};

export default LivroDetalhe