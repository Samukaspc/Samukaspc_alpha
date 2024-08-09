import React, { useEffect } from 'react';
import { AlertContainer, Icon, Message } from './styled';

export default function Alert({ type, message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); 
    }, 1000); 

    return () => clearTimeout(timer); 
  }, [onClose]);

  return (
    <AlertContainer type={type}>
      <Icon>{type === 'error' ? '❌' : type === 'warning' ? '⚠️' : '✅'}</Icon>
      <Message>{message}</Message>
    </AlertContainer>
  );
}
