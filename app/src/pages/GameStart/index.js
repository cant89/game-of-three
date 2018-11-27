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

const GameStartPage = () => (
  <StyledWrapper>
    <StartButton>Start</StartButton>
  </StyledWrapper>
)

export default GameStartPage