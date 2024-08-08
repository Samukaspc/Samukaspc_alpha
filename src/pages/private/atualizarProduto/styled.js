import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
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
    input {
        padding: 10px;
        border: 1px solid #000;
        border-radius: 5px;
        width: 300px;
    }
    justify-content: center;
    `

export const BoxStart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    textArea {
        padding: 10px;
        border: 1px solid #000;
        border-radius: 5px;
        max-width: 300px;
        min-width: 300px;
    }
`
export const BoxButton = styled.div`
    margin-top: 20px;
    
    button {
        padding: 10px;
        margin: 5px;
        background-color: #4574a1;
        color: #fff;
        border: 1px solid #000;
        border-radius: 10px;
        cursor: pointer;
        width: 150px;
        justify-content: center;
    }
 `

 export const BoxInput = styled.div`
    input {
        width: 135px;
    }
    `
export const BoxSpan = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
  
  `
export const BoxForm = styled.div`
    gap: 10px;
    display: flex;
`

