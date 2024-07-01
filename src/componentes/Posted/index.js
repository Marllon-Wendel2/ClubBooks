import styled from 'styled-components'
import { Titulo } from '../Titulos'

const PostedContainer = styled.div`
    background-color: #D3D3D3;
    color: #000080;
    text-align: center;
    padding: 10px 0;
    height: 300px;
    width: 50%;
`

const Titulo2 = styled.h2`
    width: 100%;
    padding: 20px 0;
    color: ${props => props.cor || '#000080'};
    font-size: ${props => props.tamanhoFonte || '18px;'};
    text-align: ${props => props.alinhamento || 'center'};
    margin: 0;
`

const Texto = styled.p`
    width: 100%;
    padding: 30px 0;
    lign-item: center;
    color: ${props => props.cor || '#FFFFFF'};
    font-size: ${props => props.tamanhoFonte || '18px;'};
    margin: 0;
    background-color: #2ECC71;
    border-radius:1em;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`

const Conteudo = styled.div`
    padding: 10x 10px;
    margin: 0em 3em;
    border-radius: 2em;
    
`

const textoPostado = 
    {
        "titulo": "A Seleção",
        "texto": "Achei um capitulo muito emocionante, foi dificil terminar com tanta lagrima"
    }

function Posted() {
    return (
        <PostedContainer>
            <Titulo2 tamanhoFonte = "25px;">
                Sua postagem mais recente:
            </Titulo2>
            <Conteudo>
                <Titulo2>{textoPostado.titulo.toUpperCase()}</Titulo2>
                <Texto>{textoPostado.texto}</Texto>
            </Conteudo>
        </PostedContainer>
        
    )
}

export default Posted