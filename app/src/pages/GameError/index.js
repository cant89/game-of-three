import React from 'react';
import Message from '../../components/Message'
import StartButton from '../../containers/StartButton'

const BusyPage = ({ messageText }) => (
  <Message>
    {messageText}
    <StartButton>Start again</StartButton>
  </Message>
)

export default BusyPage