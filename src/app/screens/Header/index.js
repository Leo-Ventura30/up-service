import React, { Fragment } from "react";
// import logo from "../../assets/barber.svg";
import Menu from "./Menu";
import Dropdown from "./Dropdown";
import {
  HeaderStyle,
  ContentImageStyle,
  ContainerHeader,
  ContainerMenu,
  ContainerDropdown,
} from "./style";

const Header = () => (
  <Fragment>
    <HeaderStyle>
      <ContainerHeader>
        <a href="/dashboard">{localStorage.getItem("datas")}</a>
      </ContainerHeader>
      <ContainerMenu>
        <Menu />
      </ContainerMenu>
      <ContainerDropdown>
        <Dropdown />
      </ContainerDropdown>
    </HeaderStyle>
  </Fragment>
);

export default Header;
