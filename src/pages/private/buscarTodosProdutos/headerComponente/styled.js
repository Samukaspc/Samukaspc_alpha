import styled from "styled-components";
    export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1400px;
    body {
        background-color: #f4f7f9;
    }
`;

export  const HeaderLogo = styled.div`
    display: flex;
    align-items: center;
`

export const BoxTop = styled.div`
    display : flex;
    flex-direction: row;
    width: 100%;
    gap: 10px;
    align-items: center;
`


export  const HeaderTitulo = styled.div`
    display: flex;
    width: 100%;
    border-radius: 10px;
    background-color: #5d46e2;
    padding: 10px;
    align-items: center;
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
`