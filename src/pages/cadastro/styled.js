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

export const Box = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    gap: 10px;
    justify-content: center;
    @media (max-width: 800px) {
        flex-direction: column;
    }
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


