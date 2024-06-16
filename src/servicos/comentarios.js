import axios from "axios"

const comentariosAPI = axios.create({baseURL: "http://localhost:8000/comentarios"})

async function getComentarios() {
    const response = await comentariosAPI.get('/')

    return response.data
}

async function getComentarioId(id) {
    const response = await comentariosAPI.get('/:id')

    return response.data
}

export {
    getComentarios,
    getComentarioId
}