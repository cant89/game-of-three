import React from 'react';
import styled from 'styled-components';
import ActionButton from '../../containers/ActionButton'
import CurrentNumber from '../../containers/CurrentNumber'
import { gameStates } from '../../App';
import Message from '../Message'

const StyledFooter = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    box-shadow: 0 -12px 40px 20px #ffffff;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 28px;
`

const actions = [-1, 0, 1]

const Footer = ({ gameState }) => (
  <StyledFooter>
    <CurrentNumber />
    <Wrapper>
      {actions.map(action => (
          <ActionButton
            key={action}
            action={action}
            disabled={gameState === gameStates.waiting}
          />
        ))}
    </Wrapper>
  </StyledFooter>
)

export default Footer