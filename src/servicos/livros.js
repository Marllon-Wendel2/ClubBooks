import axios from "axios"

const livrosAPI = axios.create({baseURL: "https://server-booksclub.vercel.app/livros"})

async function postLivro(novoLivro) {
    const response = await livrosAPI.post('/', JSON.stringify(novoLivro), {
        method:'POST',
        credentials: 'include',
        headers: {'Content-Type': 'application/json'},
    })

    return response.data
}

async function getLivros() {
    const response = await livrosAPI.get('/', {
        method:'GET',
        credentials: 'include',
        headers: {'Content-Type': 'application/json'},
    })

    return response.data
}

async function getLivrosPorId(id) {
    const response = await livrosAPI.get(`/${id}`, {
        method: 'GET',
        credentials: 'include',
        headers: {'Content-Type': 'application/json'}
    })

    return response.data
}

export {
    getLivros,
    getLivrosPorId,
    postLivro
}