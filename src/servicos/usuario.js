import axios from "axios"

const usuarioAPI = axios.create({
    baseURL: "https://server-booksclub.vercel.app/usuario",
    withCredentials: true
})

async function getUsuario(usuario) {
    const response = await usuarioAPI.get(`/${usuario}`, {
        method:'GET',
        credentials: 'include',
        headers: {'Content-Type': 'application/json'},
    })

    return response.data
}

async function putUsuarioPerfil(usuario, newPerfil) {

    const response = await usuarioAPI.put(`/${usuario}`, newPerfil, {
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response
}

async function putUsuarioBio(usuario, newBio) {

    const response = await usuarioAPI.put(`/${usuario}`, newBio, {
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response
}

export {
    getUsuario,
    putUsuarioPerfil,
    putUsuarioBio
}
