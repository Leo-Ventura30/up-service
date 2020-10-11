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
      <div>
      <ImageStyle></ImageStyle> 
        <InitImageStyle src={logo}></InitImageStyle>
          Barber Shop
        <EndImageStyle src={logo}></EndImageStyle>
        </div>
    </HeaderTextStyle>
)
  
export default Header;