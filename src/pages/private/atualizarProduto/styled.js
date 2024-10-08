import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    text-align: center;
    h1 {
        margin-top: 20px;
    }
`;

export const Box = styled.div`
    display: flex;
    padding: 20px;
`;
export const BoxStart = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 15px;

    textarea {
        padding: 12px;
        border: 1px solid #ddd;
        border-radius: 5px;
        resize: vertical;
        width: 100%;
        box-sizing: border-box;
    }

    span {
        font-weight: bold;
        margin-bottom: 8px;
        text-align: left;
    }

`;

export const BoxButton = styled.div`
    display: flex;
    justify-content: center;

`;

export const BoxInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;

    input {
        width: 100%;
    }

`;

export const BoxSpan = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;

`;

export const BoxForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;

    @media (min-width: 600px) {
        flex-direction: row;
        justify-content: space-between;

    }

`;
