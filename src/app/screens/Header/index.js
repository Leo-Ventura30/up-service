import React, { Fragment } from "react";
import logo from "../../assets/barber.svg";
import Menu from "./Menu";
import { HeaderStyle, ContentImageStyle } from "./style";

const Header = () => (
  <Fragment>
    <HeaderStyle>
      <ContentImageStyle className="image-init" src={logo} />
      <a href="/dashboard">Barber Shop</a>
      <ContentImageStyle className="image-end" src={logo} />
    </HeaderStyle>
    <Menu />
  </Fragment>
);

export default Header;