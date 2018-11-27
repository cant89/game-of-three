import React from 'react';
import styled from 'styled-components';

const StyledMessage = styled.div`
    display: block;
    margin: 0 auto;
    clear: both;
    margin: 20px;
    padding: 20px;
    border-radius: 5px;
    background: #e0f2f1;
    color: #000;
`

const Message = ({ children })=>(
    <StyledMessage>
        {children}
    </StyledMessage>
)

export default Message