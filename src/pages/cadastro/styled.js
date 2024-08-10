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
export const BoxButton = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 20px;
    justify-content: center;
`



