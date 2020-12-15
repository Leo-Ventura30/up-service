import React from "react";
import Styled from "styled-components";
import Bar from "./VerticalBarController";
import Section from "./SectionController";

const DivSectionStyle = Styled.div`
  display:flex;
  width:100%;
  max-height:max-content;
  
`;
const NavStyle = Styled.div`
  width:15%;
  background:#333;
  margin-right:1px;
`;
const ContentStyle = Styled.div`
  width:85%;
  background:#333;
`;
const Body = () => (
  <DivSectionStyle>
    <NavStyle></NavStyle>
    <ContentStyle>
      <Section />
    </ContentStyle>
  </DivSectionStyle>
);

export default Body;
