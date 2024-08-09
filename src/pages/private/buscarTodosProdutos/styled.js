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
    button {
        background-color: #005eff;
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

    h2 {
        text-align: center;
        color: #333;
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
    overflow: hidden;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    
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
        background-color: transparent; 
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
`;
export const SearchBox = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    input {
        width: 100%;
        border: none;
        border-radius: 5px;
        height: 20px;
        width: 150px;
        padding: 10px;
        text-align: start;
        &:focus {
            outline: none;
        }
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
        border: none;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
            background-color: #888;
        }
    }
`

export const BoxIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const BoxHeaderButton = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export  const HeaderTitulo = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    border-radius: 10px;
    background-color: #0000ff;
    padding: 10px;
    color: white;
    align-items: center;
    justify-content: space-between;
    h2 {
        color: white;
        width: 100%;
    }
   
`
export  const HeaderLogo = styled.div`
    display: flex;
    width: 50px;
    flex-direction: row;
    border-radius: 10px;
    background-color: #0000ff;
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
        background-color: #005eff;
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
