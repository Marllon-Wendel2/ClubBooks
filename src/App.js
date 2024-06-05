import Header from './componentes/Header';
import styled from 'styled-components';
import Search from './componentes/Search';
import UltimoLancamentos from './componentes/ultimoLancamentos';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #310052 35%, #4fa5e2);
`

function App() {
  return (
    <AppContainer>
      <Header/>
      <Search/>
      <UltimoLancamentos/>
    </AppContainer>
  );
}

export default App;
