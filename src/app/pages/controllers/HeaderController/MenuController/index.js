import React from "react";
import { logout } from "../../../../services/auth";
import { Container, Content, SairStyle, LinkStyle } from "../style";

import Home from "../../../../assets/home.svg";
import Calendar from "../../../../assets/calendar.svg";
import Config from "../../../../assets/configuration.svg";
import Exit from "../../../../assets/exit.svg";

const Menu = () => (
  <Container>
    <Content>
      <div>
        <img src={Home} />
        <LinkStyle href="/dashboard">home</LinkStyle>
      </div>
      <div>
        <img src={Calendar} width="50px" />
        <LinkStyle href="*">agenda</LinkStyle>
      </div>
      <div>
        <img src={Config} width="50px" />
        <LinkStyle href="*">configurações</LinkStyle>
      </div>
      <div>
        <img src={Exit} width="50px" />
        <LinkStyle onClick={logout()} href="#">
          <SairStyle>sair</SairStyle>
        </LinkStyle>
      </div>
    </Content>
  </Container>
);

export default Menu;
