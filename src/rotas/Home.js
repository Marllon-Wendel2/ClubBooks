import Header from '../componentes/Header'
import Pesquisa from '../componentes/Pesquisa'
import UltimosLancamentos from '../componentes/UltimosLancamentos'
import styled from 'styled-components'
import Posted from '../componentes/Posted'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`
const Inicio = styled.div`
  display: flex;
`
function Home() {
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
