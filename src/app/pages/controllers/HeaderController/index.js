import React, { Fragment } from 'react';
import logo from '../../../assets/barber.svg';
import Menu from './MenuController';
import {HeaderStyle, ContentImageStyle} from './style';

const Header = ()=> (
  <Fragment>
    <HeaderStyle>
        <ContentImageStyle className="image-init" src={logo}/>
          Barber Shop
        <ContentImageStyle className="image-end" src={logo}/>
    </HeaderStyle>
    <Menu/>
  </Fragment> 
)
  
export default Header;