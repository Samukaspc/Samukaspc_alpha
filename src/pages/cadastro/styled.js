import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    height: 100vh;
    justify-content: center;
    a {
        text-decoration: none;
        color: blue;
    }
    
`
export const BoxButton = styled.div`
    margin-top: 20px;
    
    button {
        padding: 10px;
        margin: 5px;
        background-color: #5d46e2;
        color: #fff;
        border: 1px solid #000;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        width: 300px;
        height: 40px;
        justify-content: center;
        &:hover {
            background-color: #888;
        }
    }
`

export const Box = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    gap: 10px;
    input {
        padding: 10px;
        border: 1px solid #000;
        border-radius: 5px;
        width: 280px;
    }
    justify-content: center;
    `

export const BoxStart = styled.div`
display: flex;
flex-direction: column;
align-items: start;
gap: 10px;
`
export const AletaError = styled.div`
    display: flex;
    border-radius: 5px;
    padding: 10px;
    border-radius:  none;
    width: 200px;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: red;
    font-size: 15px;
`

export const BoxSuccess = styled.div`
    display: flex;
    border-radius: 5px;
    padding: 10px;
    border-radius:  none;
    width: 200px;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: green;
    font-size: 15px;
`


