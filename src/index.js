import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './rotas/home.js';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './componentes/header/index.js'
import Login from './rotas/loginRouter.js';
import Registrar from './rotas/registerRouter.js';
import Logout from './componentes/logout/logout';
import { AuthPrivate } from './privateRoute/authPrivade.js';
import Estante from './rotas/estante.js';
import LivroDetalhe from './rotas/livroDetalhe.js';
import UsuarioPage from './rotas/usuarioPage.js';
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Dancing Script", cursive;
    background-color: #ECF0F1;
  }

  code {
      color: #fadbfa;
  }

  li {
    list-style: none;
    color: #fadbfa;
  }

  a {
    text-decoration: none;
    color: #fadbfa;
  }

`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={ 
          <AuthPrivate>
            <Home />
          </AuthPrivate>} />
        <Route path="/estante" element={ 
          <AuthPrivate>
            <Estante />
          </AuthPrivate>} />      
        <Route path='/login' element={<Login/>}/>
        <Route path='/registrar' element={<Registrar/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/livro/:id' element={<LivroDetalhe/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/usuario/:nome-do-usuario' element= {<UsuarioPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();

