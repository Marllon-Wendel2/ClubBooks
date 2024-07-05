import axios from "axios";

const comentariosAPI = axios.create({
    baseURL: "https://server-booksclub.vercel.app/comentarios",
    withCredentials: true
});

async function postComentario(id, novoComentario) {
    try {
        const response = await comentariosAPI.post(`/${id}`, novoComentario, {
            credentials: 'include',
            headers: {'Content-Type': 'application/json'}
        });
        return response.data
    } catch (error) {
        console.error("Erro ao postar o comentário", error)
        throw error;
    }
}

async function getComentarios() {
    const response = await comentariosAPI.get('/')

    return response.data
}

async function getComentarioId(id) {
    const response = await comentariosAPI.get('/:id')

    return response.data
}

async function putComentario(id, idComentario, novoComentario) {
    try {
        const response =await comentariosAPI.put(`/${id}/${idComentario}`, novoComentario, {
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response
    } catch (error) {
        console.error(`Erro ao atualizar o comentário com ID ${idComentario}`, error);
        throw error;
    }
}

async function deleteComentario(id, idComentario) {
    try {
        await comentariosAPI.delete(`/${id}/${idComentario}`, {
            credentials: 'include',
            headers: {'Content-Type': 'application/json'}
        });
    } catch (error) {
        console.error("Erro ao deletar o comentário", error)
        throw error;
    }
}

export {
    getComentarios,
    getComentarioId,
    postComentario,
    putComentario,
    deleteComentario
}