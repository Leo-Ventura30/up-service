import React from "react";
import { logout } from "../../../../services/auth";
import { Container, Content, SairStyle, LinkStyle } from "../style";
const Menu = () => (
  <Container>
    <Content>
      <LinkStyle href="/dashboard">home</LinkStyle>
      <LinkStyle href="*">agenda</LinkStyle>
      <LinkStyle href="*">configurações</LinkStyle>
      <LinkStyle onClick={logout()} href="#">
        <SairStyle>sair</SairStyle>
      </LinkStyle>
    </Content>
  </Container>
);

export default Menu;
