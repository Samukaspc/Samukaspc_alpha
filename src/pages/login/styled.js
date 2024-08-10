import styled from 'styled-components';
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
    width: 100%;
    justify-content: center;
    background-image: url(https://wallpapers.com/images/hd/clean-background-q9v7tw93md17jlti.jpg);
    background-size: cover;
    background-position: center top;
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    gap: 10px;
`

export const BoxLogo = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`

export const BoxCadastro = styled.div`
    display: flex;
    flex-direction: column;
    color: #626262;
    a {
         margin-top : 5px ;
        text-decoration: none;
        color: #0064ff;
    }
`

export const BoxStart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    
`

