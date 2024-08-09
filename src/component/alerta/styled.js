import styled from 'styled-components';

export const AlertContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  color: #fff;
  background-color: ${({ type }) =>
    type === 'error' ? '#f44336' :
    type === 'warning' ? '#ff9800' : '#4caf50'};
  margin-bottom: 16px;
  position: absolute;
  margin : 10px;
  right: 0;
  top: 0;
`;

export const Icon = styled.span`
  margin-right: 8px;
  font-size: 20px;
  border: none; 
  background: none; 
  border-radius: 0; 
`;

export const Message = styled.span`
  font-size: 16px;
`;
