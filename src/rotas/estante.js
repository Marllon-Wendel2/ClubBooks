import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { getLivros, postLivro } from '../servicos/livros'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const AppContainer = styled.div`
  justify-content: center;
  
`

const ComentariosContainer = styled.div`
  border-radius: 2em;
  padding: 4em;
  background-color: #8D4708;
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
  color: #FFFFFF;
  text-align: center;
`
export const Capa = styled.img `
  width: 100%;
  height: auto;
  margin: 2em 0 1em 0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`
const Button = styled.button`
  background-color: #52321D;
  color: #FFFFFF;
  border: 2px solid #DAA520;
  border-radius: 0px;
  padding: 18px 36px;
  display: inline-block;
  font-family: "Lucida Console", Monaco, monospace;
  font-size: 14px;
  letter-spacing: 1px;
  cursor: pointer;
  box-shadow: inset 0 0 0 0 #DA6509;
  transition: ease-out 0.4s;
    &:hover {
        box-shadow: inset 0 0 0 50px #DA6509;
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

  @media screen and (max-width: 724px) {
  flex-direction: column;
}
`
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  background-color: #A3E4D7;
  padding: 10px 10px 10px 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 5px 0 20px 20px;

`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  border: 1px solid #DAA520;
  border-radius: 5px;
  font-size: 16px;
`;

const InputComentario = styled.textarea`
  display: flex;
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  border: 1px solid #DAA520;
  border-radius: 5px;
  font-size: 16px;
  height: 150px;
  resize: vertical;
  margin-bottom: 20px;
`;

const FormTitulo = styled.h2`
  text-align: center;
  font-size: 24px;
  color: #000080;
  margin-bottom: 20px;
`

const SubmitButton = styled(Button)`
  width: 100%;
`;
const usuario = Cookies.get('usuario')

function Estante() {
  const navigate = useNavigate()
  const [livros, setLivros] = useState([])
  const [showForm, setForm] = useState(false)

  const [titulo, setTitulo] = useState('')
  const [src, setSrc] = useState('')
  const [autor, setAutor] = useState(usuario)
  const [conteudo, setConteudo] = useState('')

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

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const novoLivro = {titulo, src, autor, conteudo}
    await postLivro(novoLivro)
    window.location.reload()
  }

  return (
    <AppContainer>
    <ButtonContainer>
      <Button onClick={() => showForm ? setForm(false) : setForm(true)}>Adicionar Livro</Button>
    </ButtonContainer>
    {showForm ? (     
      <FormContainer>
        <FormTitulo>ADICIONANDO NOVO LIVRO</FormTitulo>
        <form onSubmit={handleFormSubmit}>
        <Input type='text' placeholder='Titulo do livro' onChange={event => setTitulo(event.target.value)}/>
        <Input type='text' placeholder='Link da capa' onChange={event => setSrc(event.target.value)}/>
        <InputComentario type='text' placeholder='Seu comentarios' onChange={event => setConteudo(event.target.value)}/>
        <SubmitButton type='submit'>Adicionar</SubmitButton>
        </form>
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
