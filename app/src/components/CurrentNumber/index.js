import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  margin: 0 30px;
  border-radius: 5px;
  padding: 28px 0;
  height: 70px;
  background: #26a69a;
  color: #fff;
  cursor: pointer;
  text-align: center;
  box-shadow: 0px 3px 0 1px #13837a;
`;

const StyledNumber = styled.span`
  display: block;
  margin-top: 18px;
  font-size: 30px;
`;

const CurrentNumber = ({ num }) => (
  <StyledSection>
    <span>Current Number is</span>
    <StyledNumber>{num}</StyledNumber>
  </StyledSection>
);

export default CurrentNumber;
