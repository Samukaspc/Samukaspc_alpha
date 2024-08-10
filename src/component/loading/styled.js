import styled from 'styled-components';
export  const Container = styled.div`
    text-align: center;
`
export const Spinner = styled.div`
    border: 8px solid #f3f3f3;
    border-top: 8px solid #5d46e2;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 1s linear infinite;
    margin: 0 auto;
    margin-top: 20px;
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

