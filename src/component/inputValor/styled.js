import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    input {
        padding: 10px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-end-end-radius: 5px;
        border-start-end-radius: 5px;
        width: ${props => props.width ? props.width : '100%'};
        @media(max-width: 768px) {
        width: 100%;
        min-width: 200px;
        }
    }
    input:focus {
        border: 2px solid #1082f7;
        outline-offset: 3px;
        outline: none;
    }
    `

export const Box = styled.div`
    display: flex;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-start-start-radius: 5px;
    border-end-start-radius: 5px;
    padding: 10px;
    justify-content: center;
    align-items: center;
`