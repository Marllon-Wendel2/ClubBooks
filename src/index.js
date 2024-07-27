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
const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Tiny5&display=swap');
  @import-normalize;

  body {
    margin: 0;
    padding: 0;
    font-family: "Tiny5", sans-serif;
    background-color: #ECF0F1;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
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
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

