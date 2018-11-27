import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    margin: 5px;
    border-radius: 5px;
    height: 50px;
    padding: 0px 28px;
    background: #26a69a;
    border: none;
    color: #fff;
    cursor: pointer;
    &:hover {
        background: #00766c;
    }
`

const Button = ({ children, onClick }) => (
  <StyledButton
    onClick={onClick}>
    {children}
  </StyledButton>
)

export default Button