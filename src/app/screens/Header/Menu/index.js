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
      <LinkStyle href="*">produtos</LinkStyle>
    </div>
    <div>
      <LinkStyle href="*">serviços</LinkStyle>
    </div>
    <div>
      <LinkStyle href="*">funcionarios</LinkStyle>
    </div>
    <div>
      <LinkStyle href="*">terceiros</LinkStyle>
    </div>
    <div>
      <LinkStyle href="*">faturamento</LinkStyle>
    </div>
  </Content>
);

export default Menu;
