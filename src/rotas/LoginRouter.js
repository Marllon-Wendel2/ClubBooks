import { useState } from 'react';
import styled from 'styled-components'
import { Navigate, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Form = styled.form`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
  padding-right: 40px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
  text-align: left;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  jus
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #E6A09A;
  color: #fff;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #D7D97A;
  }
`;

function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [redirect, setRedirect] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/login', {
          method:'POST',
          headers: {'Content-Type': 'application/json'},
          credentials: 'include',
          body: JSON.stringify({
            usuario: usuario,
            senha: senha,
        })
      });
      if(!response.ok) {
        throw new Error(`Erro HTTP! status: ${response.status}`)
      }
      const data = await response.json()
      Cookies.set('accessToken', data.accessToken, { expires: 7} )
      alert("login realizado!")
    } catch (erro) {
      return alert('Usuario ou senha invalidos!')
      
    }
     setRedirect(true)
  }
  const navigate = useNavigate()
  const handleNavigation = (path) => {
    navigate(path);
    window.location.href = path;
  }
  if(redirect) {
    handleNavigation('/')
  }

  
    return (
        <LoginContainer>
          <Title>Login</Title>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label htmlFor="username">Usuário:</Label>
              <Input type="text" id="username" placeholder="Username" onChange={(event) => setUsuario(event.target.value)} required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Senha:</Label>
              <Input type="password" id="password" placeholder="password" onChange={(event) => setSenha(event.target.value)} required />
            </FormGroup>
            <Button type="submit">Entrar</Button>
          </Form>
        </LoginContainer>
      );
    };

export default Login
