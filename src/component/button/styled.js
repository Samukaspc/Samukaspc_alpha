import styled from "styled-components";

export const BoxButton = styled.div`
    button {
        margin-top: 10px;
        padding: 10px;
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
            background-color: #014bbd;
        }
    }
  
`