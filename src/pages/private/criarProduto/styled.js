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
    margin: 20px 0;
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
    
    input[type="text"], input[type="number"] {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        width: 100%;
        box-sizing: border-box;
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
    
    button {
        margin: 5px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        transition: background-color 0.3s;
        width: 150px;
        height: 40px;
    }
    
    button:first-of-type {
        background-color: #007bff;
        color: #fff;
        
        &:hover {
            background-color: #0056b3;
        }
    }
    
    button:last-of-type {
        background-color: #28a745;
        color: #fff;
        
        &:hover {
            background-color: #218838;
        }
    }
`;

export const BoxInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    
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
