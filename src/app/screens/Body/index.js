import React from "react";
import Styled from "styled-components";
import Bar from "./VerticalBar";
import Section from "./Section";
const DivSectionStyle = Styled.div`
  display:flex;
  width:100%;
  max-height:max-content;
`;
const NavStyle = Styled.div`
  width:15%;
  background:#333;
  margin-top:6%;

  margin-right:0.1%;
  @media screen and (max-width:768px) {
    &{
      width:0%;
      visibility:hidden;
      margin:0;
    }
  }
`;
const ContentStyle = Styled.div`
  width:85%;
  background:#333;
  margin-top:6%;

  @media screen and (max-width:768px) {
    &{
      width:100%;
    }
  }
`;

const Body = () => (
  <DivSectionStyle>
    <NavStyle />
    <ContentStyle>
      <Section />
    </ContentStyle>
  </DivSectionStyle>
);

export default Body;
