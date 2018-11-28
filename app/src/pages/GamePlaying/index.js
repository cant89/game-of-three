import React, { Component } from 'react';
import MovesList from '../../containers/MovesList'
import Footer from '../../containers/Footer'
import AutoPlayButton from '../../containers/AutoPlayButton'

const GamePlayingPage = ()=>(
      <React.Fragment>
        <AutoPlayButton />
        <MovesList />
        <Footer />
      </React.Fragment>
)
export default GamePlayingPage