import Header from '../componentes/Header'
import Pesquisa from '../componentes/Pesquisa'
import UltimosLancamentos from '../componentes/UltimosLancamentos'
import styled from 'styled-components'
import Posted from '../componentes/Posted'
import { useEffect } from 'react'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`
const Inicio = styled.div`
  display: flex;
`
function Home() {
  // useEffect(()=> {
  //   (
  //     async () => {
  //       await fetch('http://localhost:8000/login', {
  //         headers: {'Content-Type': 'application/json'},
  //         credentials: 'include',
  //     }
  //   )();
  // });

  return (
    <AppContainer>
      <Inicio>
      <Pesquisa />
      <Posted />
      </Inicio>
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default Home
