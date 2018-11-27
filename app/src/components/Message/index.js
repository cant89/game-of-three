import React from 'react';
import styled from 'styled-components';

const StyledMessage = styled.p`
    display: block;
    clear: both;
    margin: 20px;
    padding: 20px;
    border-radius: 5px;
    background: #e0f2f1;
    color: #000;
`

const Message = ({ className, children })=>(
    <StyledMessage className={className}>
        {children}
    </StyledMessage>
)

export default Message