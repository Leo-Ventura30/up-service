import React from 'react';
import logo from '../../../assets/barber.svg';
import {
  HeaderTextStyle,
  ImageStyle,
  InitImageStyle,
  EndImageStyle
} from './style';

const Header = ()=> (
    <HeaderTextStyle>
      <ImageStyle></ImageStyle> 
        <InitImageStyle src={logo}></InitImageStyle>
          Barber Shop
        <EndImageStyle src={logo}></EndImageStyle>
    </HeaderTextStyle>
)
  
export default Header;