import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { getLivros } from '../servicos/livros'
import { useNavigate } from 'react-router-dom'

const AppContainer = styled.div`
  justify-content: center;
  
`

const ComentariosContainer = styled.div`
  border-radius: 2em;
  padding: 2em;
  background-color: #2ECC71;
  margin: 20px;
  width: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
const TituloLivro = styled.h3 `
  margin: 1em 0;
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 400;
  color: #DAA520;
  text-align: center;
`
const Capa = styled.img `
  width: 100%;
  height: auto;
  margin-bottom: 1em;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`
const Button = styled.button`
  background-color: #DAA520
  color: #FFFFFF;
  border: 2px solid #DAA520;
  border-radius: 0px;
  padding: 18px 36px;
  display: inline-block;
  font-family: "Lucida Console", Monaco, monospace;
  font-size: 14px;
  letter-spacing: 1px;
  cursor: pointer;
  box-shadow: inset 0 0 0 0 #000080;
  transition: ease-out 0.4s;
    &:hover {
        box-shadow: inset 0 0 0 50px #000080;
        color: white;
        }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh; /* ou ajuste conforme necessário */
`;

const LivrosEstante = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #ECF0F1;
`
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  background-color: #A3E4D7;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;

const Inicio = styled.div`
display: flex;
`
const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  border: 1px solid #DAA520;
  border-radius: 5px;
  font-size: 16px;
`;

function Estante() {
  const navigate = useNavigate()
  const [livros, setLivros] = useState([])
  const [showForm, setForm] = useState(true)

  useEffect(() => {
      fetchLivros()
  }, [])

  async function fetchLivros() {
      const livrosDaAPI = await getLivros()
      setLivros(livrosDaAPI)
  }

  //redireciona para pagina do livro
  const handleClick = (id) => {
    navigate(`/livro/${id}`)
  }

  return (
    <AppContainer>
    <ButtonContainer>
      <Button>Adicionar Livro</Button>
    </ButtonContainer>
    {showForm ? (     
      <FormContainer>
      
      </FormContainer>) : null}

    <LivrosEstante>
     {livros.map(livro => (
      <ComentariosContainer key={livro._id} onClick={() => handleClick(livro._id)}>
        <Capa src={livro.src}/>
        <TituloLivro>{livro.titulo}</TituloLivro>
      </ComentariosContainer>
     ))}
     </LivrosEstante>
    </AppContainer>
  );
}

export default Estante
