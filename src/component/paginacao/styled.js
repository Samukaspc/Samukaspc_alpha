import styled from 'styled-components';

export const PaginationContainer = styled.div`
    display: flex;
    gap: 5px;
    `;

export const PaginationButton = styled.button`
    border-radius: 5px;
    height: 40px;
    width: 50px;
    border: none;
    display: flex;
    justify-content: center;    
    color: #fff;
    font-weight: bold;
    align-items: center;
    background-color: #5d46e2;
    cursor: pointer;    
    &:hover {
        background-color: #014bbd;
    }
`;
