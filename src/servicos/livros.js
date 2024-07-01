import axios from "axios"

const livrosAPI = axios.create({baseURL: "http://localhost:8000/livros"})

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
    getLivrosPorId
}