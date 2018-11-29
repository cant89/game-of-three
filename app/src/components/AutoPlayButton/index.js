import React, { Component } from "react";
import { gameStates } from "../../App";
import styled from "styled-components";

const StyledButton = styled.button`
  display: block;
  margin: 5px auto;
  border-radius: 100px;
  height: 60px;
  padding: 0 20px;
  background: ${({ enabled }) => (enabled ? "#26a69a" : "#d05b5b")};
  border: none;
  color: #fff;
  line-height: 60px;
  cursor: pointer;
  font-weight: 700;
  outline: none;
  box-shadow: 0px 3px 0 1px ${({ enabled }) => (enabled ? "#13837a" : "#9c3b3b")};
  -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); 
`;

class AutoPlayButton extends Component {
  state = {
    enabled: false
  };

  getActionFromNum = num => {
    const n = num / 3;
    return n === Math.round(n) ? 0 : n < Math.round(n) ? 1 : -1;
  };

  enableAutoPlay = () => {
    const { num, autoPlay } = this.props;
    const action = this.getActionFromNum(num);
    this.t = setTimeout(() => autoPlay(action), 3000);
  };

  disableAutoPlay = () => {
    this.t && clearTimeout(this.t);
  };

  manageAutoPlay = () => {
    const { gameState } = this.props;

    gameState === gameStates.playing
      ? this.enableAutoPlay()
      : this.disableAutoPlay();
  };

  componentDidUpdate = () => {
    this.state.enabled && this.manageAutoPlay();
  };

  componentDidMount = () => {
    this.state.enabled && this.manageAutoPlay();
  };

  componentWillUnmount = () => {
    this.state.enabled && this.disableAutoPlay();
  };

  toggleAutoPlay = () => {
    this.setState({
      enabled: !this.state.enabled
    });
  };

  render() {
    const { enabled } = this.state;
    return (
      <StyledButton enabled={enabled} onClick={() => this.toggleAutoPlay()}>
        AI {enabled ? "ON" : "OFF"}
      </StyledButton>
    );
  }
}

export default AutoPlayButton;
