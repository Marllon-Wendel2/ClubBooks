import axios from "axios";
import Cookies from 'js-cookie';

async function handleLogin(usuario, senha, navigate) {
    
    try {
        const response = await axios.post('http://localhost:8000/login', {usuario: usuario, senha:senha});
        const token = response.data.token.token;
        console.log(token)
        Cookies.set('accessToken', token, { expires: 7, secure: true})
        
        navigate('/')
        } catch (erro) {
                console.log('Erro ao logar', erro);
                alert('Úsuario ou senha invalidos')
        }
}



export { handleLogin };