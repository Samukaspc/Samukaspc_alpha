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
    background-color: white;
    border-radius: 5px;
    z-index: 1001;
    display: flex;
    flex-direction: column;
    max-width: 800px;
    width: 100%;
`
export const BoxSvg = styled.div`
    display: flex;
    justify-content: end;
    width: 100%;
    position: absolute;
    svg {
        cursor: pointer;
        &:hover {
            color: red;
        }
    }
`