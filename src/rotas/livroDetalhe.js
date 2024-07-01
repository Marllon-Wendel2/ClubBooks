import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLivrosPorId } from "../servicos/livros";
import { Titulo } from "../componentes/Titulo";
import styled from "styled-components";

function LivroDetalhe() {
    const {id}  = useParams()

    const [livro, setLivro] = useState([])
    const [comentarios, setComentarios] = useState([])

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

const Livro = styled.h1`
    margin: 1em 0;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 400;
    color: #DAA520;
    text-align: center;
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

    return (
        <Pagina>
        <Livro>{livro.titulo}</Livro>
        <Capa src={livro.src}></Capa>
        {comentarios.map( comentario => (
            <ComentariosContainer>
            <Autor>{comentario.autor} comentou:</Autor>
            <ComentarioConteudo>{comentario.conteudo}</ComentarioConteudo>
            </ComentariosContainer>
        ))}
        </Pagina>
    )
}

export default LivroDetalhe