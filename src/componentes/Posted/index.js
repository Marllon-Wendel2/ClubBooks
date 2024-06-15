import styled from 'styled-components'
import { Titulo } from '../Titulos'

const PostedContainer = styled.div`
    background-image: linear-gradient(90deg, #D7D97A 35%, #D9C532 165%);
    color: #FFF;
    text-align: center;
    padding: 10px 0;
    height: 300px;
    width: 50%;
`

const Titulo2 = styled.h2`
    width: 100%;
    padding: 30px 0;
    color: ${props => props.cor || '#000'};
    font-size: ${props => props.tamanhoFonte || '18px;'};
    text-align: ${props => props.alinhamento || 'center'};
    margin: 0;
`

const Texto = styled.p`
    width: 100%;
    padding: 30px 0;
    lign-item: center;
    color: ${props => props.cor || '#000'};
    font-size: ${props => props.tamanhoFonte || '18px;'};
    margin: 0;
`

const Conteudo = styled.div`
    padding: 10x 10px;
    background-color: white;
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
            <Titulo2 cor ="F1F1F1" tamanhoFonte = "36px;">
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