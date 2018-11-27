import React from 'react';
import styled from 'styled-components';
import MovesList from '../../containers/MovesList'
import Footer from '../../containers/Footer'

const StyledWrapper = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const GameStartPage = ({ gameState }) => (
  <React.Fragment>
    <MovesList />
    <Footer />
  </React.Fragment>
)

export default GameStartPage