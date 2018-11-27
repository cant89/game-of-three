import React from 'react';
import styled from 'styled-components'

const StyledButton = styled.button`
    margin: 5px;
    border-radius: 100%;
    width: 50px;
    height: 50px;
    background: #26a69a;
    border: none;
    color: #fff;
    cursor: pointer;
    &:hover {
        background: #00766c;
    }
`

const CircularButton = ({ action, onClick }) => (
  <StyledButton
    onClick={() => onClick(action)}>
    {action}
  </StyledButton>
)

export default CircularButton