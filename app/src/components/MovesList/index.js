import React from 'react';
import Move from '../Move'
import { gameStates } from '../../App';
import Message from '../Message'
import styled from 'styled-components'

const StyledMessage = styled.li`
  float: left;
  clear: both;
  list-style: none;
`
const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  padding-bottom: 252px;
  overflow: auto;
`

const MovesList = ({ list, gameState }) => (
  <React.Fragment>
    <StyledList>
      {list.map(({ prevNum, num, action, mine }) => (
        <Move
          key={num}
          prevNum={prevNum}
          num={num}
          action={action}
          mine={mine}
        />
      ))}
      {gameState === gameStates.waiting &&
        <StyledMessage>
          <Message>
            Waiting opponent move...
            </Message>
        </StyledMessage>}
    </StyledList>
  </React.Fragment>
)

export default MovesList