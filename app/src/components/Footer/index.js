import React from 'react';
import styled from 'styled-components';
import ActionButton from '../ActionButton'

const Footer = styled.footer`
    position: fixed;
    bottom: 0;
    padding: 0px 28px;
`

const FooterWrapper = ({ actions })=>(
    <Footer>
        {actions.map(action=>(
            <ActionButton 
                action={action} 
                // onClick={handlePlay} 
            />
        ))}
    </Footer>
)

export default FooterWrapper