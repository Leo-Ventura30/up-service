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
  width:17%;
  background:#fff;
  margin-top:5%;
  border-radius: 0 20px 20px 0;
  min-height:80vh;
  @media screen and (max-width:768px) {
    &{
      width:0%;
      visibility:hidden;
      margin:0;
    }
  }
`;
const ContentStyle = Styled.div`
  width:83%;
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
