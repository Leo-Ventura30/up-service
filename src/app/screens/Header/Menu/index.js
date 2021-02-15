import React from "react";
import { Content, LinkStyle } from "../style";

const Menu = () => (
  <Content>
    <div>
      <LinkStyle className="nav-home" href="/dashboard">
        home
      </LinkStyle>
    </div>
    <div>
      <LinkStyle href="*">agenda</LinkStyle>
    </div>
    <div>
      <LinkStyle href="*">configuraçoes</LinkStyle>
    </div>
  </Content>
);

export default Menu;
