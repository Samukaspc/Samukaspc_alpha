import styled from 'styled-components';

export const ContainerLoading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    width: 100%;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f4f4f4;
    height: 100vh;
   
    body {
        font-family: Arial, sans-serif;
        background-color: #f4f7f9;
    }

    h2 {
        text-align: center;
        margin-bottom: 20px;
        color: #333;
    }
   
   
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    margin: 20px 0;
    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    th, td {
        padding: 12px;
        text-align: left;
        height: 50px;
    }

    thead th {
        background-color: #0000ff; 
        color: white;
        width: 200px;
    }

    tbody td {
        text-align: left;
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
`;

export const BoxHeader = styled.div`
    display: flex;
    width: 100%;
    justify-content: center; 
    margin-bottom: 20px;
    
    button {
        background-color: #0000ff;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
            background-color: #888;
        }
    }
`;


export const BoxEnd = styled.div`
    display: flex;
    align-items: center;
`;
export const SearchBox = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    input {
        width: 100%;
        border: none;
        border-radius: 5px;
        height: 30px;
        padding: 10px;
        text-align: center;
    }

    svg {
        position: absolute;
        right: 10px;
        cursor: pointer;
        color: #007bff;
    }
`;


export const Header = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    button {
        background-color: #0000ff;
        color: white;
        border: none;
        border-radius: 5px;
        width: 150px;
        cursor: pointer;
        &:hover {
            background-color: #888
        }
    }
`
