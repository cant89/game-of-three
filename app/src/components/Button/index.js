import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
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

const ButtonWrapper = ({ children, onClick })=>(    
    <Button
        onClick={onClick}>
        {children}
    </Button>
)

export default ButtonWrapper