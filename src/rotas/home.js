
import Pesquisa from '../componentes/pesquisa'
import styled from 'styled-components'
import FeedComentarios from '../componentes/feed'

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
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

export default Home;
