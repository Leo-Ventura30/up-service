import React from 'react';
import Styled from 'styled-components';
import Bar from './VerticalBarController';
import Section from './SectionController';
const BodyStyle = Styled.div`
  width:100%;
  opacity:0.9;
  background:#1A1916;
  height:700px;
  max-height:max-content;
  padding-bottom:5px;
`;
const DivSectionStyle = Styled.div`
  padding: 1% 1% 1% 6%;
`;
const Body = ()=> (
    <BodyStyle>
      <DivSectionStyle>
        <Section>
        </Section>
      </DivSectionStyle>
        <Bar></Bar>
    </BodyStyle>
)
  
export default Body;