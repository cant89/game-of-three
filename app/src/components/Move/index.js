import React from 'react';
import styled from 'styled-components';

const StyledMove = styled.li`
  list-style: none;
  float: ${props => props.mine ? "right" : "left"};
  clear: both;
  margin: 15px;
  text-align: ${props => props.mine ? "right" : "left"}
  font-size: 13px;
`
const Box = styled.div`
  border-radius: 5px;
  height: 50px;
  padding: 0px 28px;
  background: #e0f2f1;
  color: #000;
  line-height: 50px;
  font-size: 15px;
  box-shadow: 0 0 15px #eee;
`

const Move = ({ prevNum, num, action, mine }) => (
  <StyledMove mine={mine}>
    {mine ? "Me" : "Opponent"}
    <Box>
      {prevNum !== undefined && action !== undefined
        ? `${prevNum} + ${action} / 3 = `
        : null}
      <strong>{num}</strong>
    </Box>
  </StyledMove>
)

export default Move