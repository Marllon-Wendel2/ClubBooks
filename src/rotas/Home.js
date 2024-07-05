
import Pesquisa from '../componentes/Pesquisa'
import styled from 'styled-components'
import FeedComentarios from '../componentes/Feed'

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
      </Inicio>
      <FeedComentarios />
    </AppContainer>
  );
}

export default Home
