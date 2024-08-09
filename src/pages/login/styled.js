import styled from 'styled-components';
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 90vh;
    width: 100%;
    justify-content: center;
`;


export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    gap: 10px;
    input {
        padding: 10px;
        border: 1px solid #000;
        border-radius: 5px;
        width: 300px;
    }
 
    
`
export const BoxButton = styled.div`
    gap: 10px;
    display: flex;
    flex-direction: column;
    button {
        padding: 10px;
        background-color: blue;
        color: #fff;
        border: 1px solid #000;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        width: 325px;
        justify-content: center;
        &:hover {
            background-color: #888;
        }
    }
    a {
        text-decoration: none;
        color: blue;
    }
`

export const BoxLogo = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
  
`

export const BoxCadastro = styled.div`
    display: flex;
`

export const BoxStart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
`

