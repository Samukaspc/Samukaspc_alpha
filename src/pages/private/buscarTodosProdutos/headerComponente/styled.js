import styled from "styled-components";

    export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 20px;
    max-width: 1400px;
    overflow: hidden;
    gap: 20px;
    button {
        background-color: #5d46e2;
        color: white;
        border: none;
        height: 40px;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
            background-color: #888;
        }
    }
   
    body {
        background-color: #f4f7f9;
    }
`;

export  const HeaderLogo = styled.div`
    display: flex;
    width: 50px;
    height: 40px;
    flex-direction: row;
    border-radius: 10px;
    background-color: #5d46e2;
    padding: 10px;
    align-items: center;
    justify-content: center;
`

export const BoxTop = styled.div`
    display : flex;
    flex-direction: row;
    width: 100%;
    gap: 10px;
    align-items: center;
    button {
        background-color: #fff;
        color: white;
        border: none;
        height: 40px;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
            background-color: #888;
        }
    }
`


export  const HeaderTitulo = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    border-radius: 10px;
    background-color: #5d46e2;
    padding: 10px;
    color: white;
    align-items: center;
    justify-content: space-between;
    span {
        color: #0000ff;
        margin-left: 5px;
    }
    
    h2 {
        width: 100%;
        color: #fff
    }
    @media(max-width: 800px) {
        h2 {
            font-size: 15px;
        }
        button {
            padding: 5px 10px;
        }
    }
   
`

export const BoxIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
`