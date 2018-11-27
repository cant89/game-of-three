import React from 'react';
import styled from 'styled-components'

const StyledButton = styled.button`
    margin: 5px;
    border-radius: 100%;
    width: 60px;
    height: 60px;
    background: #26a69a;
    border: none;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    opacity: ${props => props.disabled ? ".5" : "1"};
    
  box-shadow: 0px 3px 0 1px #13837a;
    &:hover {
        background: #00766c;
    }
    &:active {
      outline: none;
      box-shadow: none;
    }
`

const CircularButton = ({ action, onClick, disabled }) => (
  <StyledButton
    disabled={disabled}
    onClick={() => !disabled && onClick(action)}>
    {action}
  </StyledButton>
)

export default CircularButton