import React from 'react';
import Styled from 'styled-components';
import Content from './ContentController';

const SectionStyle = Styled.section` 
  position:absolute;
  background:#555;
  border-radius:10px;
  width:93%;
  max-height:max-content;
`;


const Section = ()=> (
    <SectionStyle>
      <Content></Content>
    </SectionStyle>
)
  
export default Section;