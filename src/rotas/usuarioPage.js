import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { getUsuario, putUsuarioBio, putUsuarioPerfil } from '../servicos/usuario';
import imgFundo from '../img/Backgroundiphone.jpeg';
import Cookies from 'js-cookie';
import  perfilf2 from '../img/perfilf2.png';
import  perfilf3 from '../img/perfilf3.png';
import  perfilf4 from '../img/perfilf4.png';
import  perfilm1 from '../img/perfilm1.png';
import  perfilm2 from '../img/perfilm2.png';
import  perfilm3 from '../img/perfilm3.png';
import { Titulo } from '../componentes/titulo';



let nada
const listPerfil = [ nada, perfilf2, perfilf3, perfilf4, perfilm1, perfilm2, perfilm3]

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${imgFundo});
`

const PerfilContainer = styled.div`
  display: flex;
  margin: 5px;
  padding: 2em;
  background: #8D4708;
  @media screen and (max-width: 724px) {
   display: block;
  }
`
const FormUpdate = styled.div`
  background: #8D4708;
`
const OpcaoPerfil = styled.img`
  width: 10%;
  padding: 2em;
  cursor: pointer;

  @media screen and (max-width: 724px) {
    width: 40%;
  }
`

const Subtitulo = styled.h3`
  margin: 2em 5em;
  @media screen and (max-width: 724px) {
    margin: 0;
  }
`

const Perfil = styled.img`
  width:20%;
  @media screen and (max-width: 724px) {
    width:100%
  }
`
const Button = styled.button`
  margin: 2em 5em;
  background-color: #52321D;
  color: #FFFFFF;
  border: 2px solid #DAA520;
  border-radius: 0px;
  cursor: pointer;
  box-shadow: inset 0 0 0 0 #DA6509;
  transition: ease-out 0.4s;
    &:hover {
        box-shadow: inset 0 0 0 50px #DA6509;
        color: white;
        }

  @media screen and (max-width: 724px) {
  
  }
`

const TextArea =  styled.textarea`
  width: 100%;
  height: 100px;
  padding: 0.25em;
  margin: 10px;
  background-color: #ECF0F1;
  color: black;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    background-color: #DA6509;
  }

  @media screen and (max-width: 724px) {
   width: 100%;
   height: 100px;
  }
`

function UsuarioPage() {
  const [usuarioPage, setUsuario] = useState([])
  const [showForm, setForm] = useState('')
  const usuarioCookie = Cookies.get('usuario')
  const [newAbout, setAbout] = useState('');

  console.log(usuarioPage)
  console.log(showForm)

  useEffect(() => {
    fetchUsuario()
  }, [])

  async function fetchUsuario() {
    const usuarioData = await getUsuario(usuarioCookie)
    setUsuario(usuarioData)
  
  }

  async function handlePerfil(index) {
      const perfilObj = { perfil: index };
      await putUsuarioPerfil(usuarioCookie, perfilObj)
      window.location.reload()
  }

  function creatMenu(name) {
    if(showForm && showForm !== name) {
      setForm(name)
    } else if (showForm === name) {
      setForm('')
    } else {
      setForm(name)
    }
  }

  async function saveAbout(newBio) {
    const aboutObj =  { about: newBio}
    await putUsuarioBio(usuarioCookie, aboutObj)
    window.location.reload()
  }

  return (
    <AppContainer>
      <Titulo>Perfil</Titulo>
      <PerfilContainer>
          <Perfil src={listPerfil[usuarioPage.perfil]}/>
        <div>
          <Subtitulo>{usuarioPage.about}</Subtitulo>
          <Button onClick={() => creatMenu('alterar perfil')}>Alterar Perfil</Button>
          <Button onClick={() => creatMenu('alterar about')}>Alterar Bio</Button>
          <Button>Alterar E-mail</Button>
          <Button>Alterar Senha</Button>
          <Button>Excluir conta</Button>
        {
         showForm === 'alterar perfil' && 
          (
            <FormUpdate>
              <Subtitulo>Escolha a foto de perfil:</Subtitulo>
              { listPerfil.map( (perfil, index) => (<OpcaoPerfil 
                key={index} 
                src={perfil}
                onClick={() => handlePerfil(index)}
                />))}
            </FormUpdate>
            )
        }
        {
          showForm === 'alterar about' && (
            <FormUpdate>
              <form onSubmit={ event => {
                event.preventDefault();
                saveAbout(newAbout)
              }}>
              <TextArea 
              value={newAbout}
              onChange={(event) => setAbout(event.target.value)}
              placeholder='Digite sua nova bio...'
              />
              <Button type='submit'>Salvar</Button>
              </form>
            </FormUpdate>
           )
        }   
        </div>
      </PerfilContainer>
    </AppContainer>
  );
}

export default UsuarioPage
