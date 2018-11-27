import React from 'react';
import styled from 'styled-components';

const StyledMove = styled.div`
    float: ${props => props.mine ? "right" : "left"};
    clear: both;
    margin: 5px;
    border-radius: 5px;
    height: 50px;
    padding: 0px 28px;
    background: #e0f2f1;
    color: #000;
    line-height: 50px;
`

const Move = ({ prevNum, num, action, mine })=>(
    <StyledMove mine={mine}>
        {mine ? "You: " : "Opponent: "}
        {prevNum !== undefined && action !== undefined
            ?`${prevNum} + ${action} / 3 = `
            : null}
        <strong>{num}</strong>
    </StyledMove>
)

export default Move