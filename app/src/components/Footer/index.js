import React from 'react';
import styled from 'styled-components';
import ActionButton from '../../containers/ActionButton'

const StyledFooter = styled.footer`
    position: fixed;
    bottom: 0;
    padding: 0px 28px;
`
const actions = [-1, 0, 1]

const Footer = () => (
  <StyledFooter>
    {actions.map(action => (
      <ActionButton
        action={action}
      />
    ))}
  </StyledFooter>
)

export default Footer