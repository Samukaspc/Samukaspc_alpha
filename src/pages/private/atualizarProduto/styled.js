import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: #f9f9f9;

    a {
        text-decoration: none;
        color: #007bff;
    }
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
    padding: 20px;
    background: #fff;
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
        min-height: 120px;
        width: 100%;
        box-sizing: border-box;
    }

    input[type="text"], input[type="number"] {
        padding: 12px;
        border: 1px solid #ddd;
        border-radius: 5px;
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
    margin-top: 20px;

    button {
        padding: 12px 20px;
        margin: 0 5px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        transition: background-color 0.3s, box-shadow 0.3s;
        width: 150px;
        height: 45px;
    }

    button:first-of-type {
        background-color: #007bff;
        color: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

        &:hover {
            background-color: #0056b3;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
        }
    }

    button:last-of-type {
        background-color: #28a745;
        color: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

        &:hover {
            background-color: #218838;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
        }
    }
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
    gap: 20px;
    width: 100%;

    @media (min-width: 600px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;
