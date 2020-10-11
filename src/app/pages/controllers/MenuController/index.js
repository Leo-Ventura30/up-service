import React from 'react';

import {
  Container, 
  Content, 
  SairStyle, 
  LinkStyle,
  NavStyle
} from './style';
const Menu = ()=> (
  <Container>
    <Content>
      <NavStyle>
          <LinkStyle href="*">home</LinkStyle>
          <LinkStyle href="*">agenda</LinkStyle>
          <LinkStyle href="*">configurações</LinkStyle>
          <LinkStyle href="*"><SairStyle>sair</SairStyle></LinkStyle>
      </NavStyle>
    </Content>
  </Container>
)
  


export default Menu;