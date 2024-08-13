import styled from "styled-components";

export const BoxButton = styled.div`
    button {
        background-color: ${props => props.cor ? props.cor : '#0064ff'};
        height: 40px;
        color: #fff;
        border: 1px solid #000;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        width:${props => props.width ? props.width : '100%'};
        justify-content: center;
        font-weight: bold;
        &:hover {
            background-color: ${props => props.corSecundario ? props.corSecundario : '#014bbd'};
        }
        @media(max-width: 768px) {
            width: 100%;
            padding: 10px;
            min-width: 110px;
        }
    }
  
`