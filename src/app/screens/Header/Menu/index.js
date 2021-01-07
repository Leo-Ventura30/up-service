import React from "react";
import { logout } from "../../../services/auth";
import { Container, Content, SairStyle, LinkStyle, HomeStyle } from "../style";

import Home from "../../../assets/home.svg";
import Calendar from "../../../assets/calendar.svg";
import Config from "../../../assets/configuration.svg";
import Exit from "../../../assets/exit.svg";

const Menu = () => (
  <Container>
    <Content>
      <div>
        {/* <img src={Home} /> */}
        <LinkStyle className="nav-home" href="/dashboard">
          home
        </LinkStyle>
      </div>
      <div>
        {/* <img src={Calendar} /> */}
        <LinkStyle href="*">agenda</LinkStyle>
      </div>
      <div>
        {/* <img src={Config} /> */}
        <LinkStyle href="*">configurações</LinkStyle>
      </div>
    </Content>
  </Container>
);

export default Menu;
