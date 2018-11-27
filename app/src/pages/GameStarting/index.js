import React from 'react';
import Message from '../../components/Message'
import StartButton from '../../containers/StartButton'
import styled from 'styled-components';

const StyledWrapper = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const GameStartingPage = () => (
  <StyledWrapper>
    <Message>
        Waiting for other player...
    </Message>
  </StyledWrapper>
)

export default GameStartingPage