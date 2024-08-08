import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: #f4f4f4;
    h1 {
        padding: 20px;
    }
    button {
        background-color: blue;
        color: #fff;
        border-radius: 5px;
        cursor: pointer;
        width: 150px;
        height: 35px;
    }
    input {
        padding: 5px;
        border: 1px solid #000;
        border-radius: 5px;
        width: 150px;
        height: 20px;
    }
`;


export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;

    th, td {
        padding: 12px;
        text-align: left;
    }

    thead {
        background-color: blue;
        color: #fff;
    }

    th {
        border-bottom: 2px solid #0056b3;
    }

    tbody tr:nth-child(even) {
        background-color: #f9f9f9;
    }

    tbody tr:hover {
        background-color: #f1f1f1;
    }
`;

export const BoxHeader = styled.div`
    padding: 5px;
    display: flex;
    justify-content: end;
    width: 100%;
    gap: 10px;
`

export const BoxIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`


