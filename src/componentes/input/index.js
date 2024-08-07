import styled from "styled-components";

const Input = styled.input`
    order: 1px solid #FFF;
    background: #C9935A;
    border: 1px solid #FFF;
    padding: 20px 140px;
    border-radius: 50px;
    width: 200px;
    color: black;
    font-size: 16px;
    margin-bottom: 10px;

    @media screen and (max-width: 724px) {
    width: 60px;

    }

    &::placeholder {
            color: #FFF;
            font-size: 12px;
            justify-content: center;
            text-align: center;

        @media screen and (max-width: 724px) {
            font-size: 10px;
        }
    }
    
`

export default Input