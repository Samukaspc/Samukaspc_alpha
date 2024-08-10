import styled from "styled-components";

export const Bakcground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
    `

export const ModalBox = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #f4f4f4;
    
    border-radius: 5px;
    z-index: 999;
    display: flex;
    flex-direction: column;
    padding: 20px;
    `
export const BoxSvg = styled.div`
    padding: 10px;
    display: flex;
    justify-content: end;
    position: absolute;
    right: 10px;
    top: 5px;
    
    svg {
        cursor: pointer;
        &:hover {
            color: red;
        }
    }
    @media(max-width: 768px) {
        right: 0px;
        top: 0px;
    }
`