import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
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

const ActionButton = ({ action, onClick })=>(    
    <Button
        onClick={()=>onClick(action)}>
        {action}
    </Button>
)

export default ActionButton