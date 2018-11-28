import React, { Component } from 'react';
import { gameStates } from '../../App';

class AutoPlayButton extends Component {
  state = {
    enabled: false
  }

  getActionFromNum = num => {
    const n = num / 3
    return n === Math.round(n)
      ? 0
      : n < Math.round(n)
        ? 1
        : -1
  }

  enableAutoPlay = () => {
    const { num, autoPlay } = this.props
    const action = this.getActionFromNum(num)
    this.t = setTimeout(() => autoPlay(action), 3000)
  }

  disableAutoPlay = () => {
    this.t && clearTimeout(this.t)
  }

  manageAutoPlay = () => {
    const { gameState } = this.props

    gameState === gameStates.playing
      ? this.enableAutoPlay()
      : this.disableAutoPlay()
  }

  componentDidUpdate = () => {
    this.state.enabled && this.manageAutoPlay()
  }

  componentDidMount = () => {
    this.state.enabled && this.manageAutoPlay()
  }

  componentWillUnmount = () => {
    this.state.enabled && this.disableAutoPlay()
  }

  toggleAutoPlay = () => {
    this.setState({
      enabled: !this.state.enabled
    })
  }

  render() {
    const { enabled } = this.state
    return (
      <button onClick={() => this.toggleAutoPlay()}>{enabled ? "Autoplay enabled" : "Autoplay disabled"}</button>
    )
  }
}

export default AutoPlayButton