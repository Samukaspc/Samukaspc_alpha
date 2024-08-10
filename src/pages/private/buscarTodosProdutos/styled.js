import styled from 'styled-components';

export const ContainerLoading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    `

export const ContainerPai = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: start;
    background-color: #f4f4f4;
    overflow: hidden;
    `

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 20px;
    max-width: 1400px;
    overflow: hidden;
    gap: 20px;
    body {
        background-color: #f4f7f9;
    }
    h2 {
        text-align: center;
        color: #fff
    }
`;

export const BoxButtonEnd = styled.div`
    display: flex;
    width: 100%;
    justify-content: end;
    svg {
        margin-right: 5px;
    }
`

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    th, td {
        padding: 12px;
        text-align: center;
        button {
            background-color: transparent;
            width: 100%;
            &:hover {
                background-color: transparent;
            }
        }
    }
    thead th {
        color: #ffffff;
        background-color: #5d46e2; 
        width: 100px;
    }
    tbody td {
        text-align: center;
        border: 1px solid #ddd;
    }
    tbody tr:nth-child(even) {
        background-color: #f0f8ff; 
    }
    tbody tr:nth-child(odd) {
        background-color: #ffffff;
    }
    tbody tr:hover {
        background-color: #e6f2ff; 
    }
    tbody tr:last-child td {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    @media (max-width: 800px) {
        display: block;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch; 
        white-space: nowrap;
    }
`;

export const BoxHeader = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 20px;
    height: 100%;
    justify-content: center;
`;


export const BoxEnd = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
        margin: 0 5px;
    }
`;
export const SearchBox = styled.div`
    display: flex;
    position: relative;
    svg {
        position: absolute;
        right: 10px;
        top: 10px;
    }
`;
export const Box = styled.div`
    display: flex;
    width: 100%;
`
export const BoxHeaderButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    @media(max-width: 800px) {
        flex-direction: column;
        gap: 10px;

    }
`



