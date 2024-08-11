import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
    a {
        text-decoration: none;
        color: #fafafa;
    }
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

export const BoxStart = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    textarea {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        resize: vertical;
        min-height: 100px;
    }
    span {
        font-weight: bold;
        margin-bottom: 5px;
        display: block;
        text-align: left;
    }
`;

export const BoxButton = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
`;

export const BoxInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
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
