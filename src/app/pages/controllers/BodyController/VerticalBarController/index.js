import React from 'react';
import Adduser from "../../../../assets/adduser.svg";
import Configuration from "../../../../assets/configuration.svg";
import Exit from "../../../../assets/exit.svg";
import Home from "../../../../assets/home.svg";
import Calendar from "../../../../assets/calendar.svg";

import {BarStyle, LinkBarStyle} from "./style";

const Bar = ()=> (
    <BarStyle>
          <LinkBarStyle src={Home}></LinkBarStyle>
          <LinkBarStyle src={Adduser}></LinkBarStyle>
          <LinkBarStyle src={Calendar}></LinkBarStyle>
          <LinkBarStyle src={Configuration}></LinkBarStyle>
          <LinkBarStyle src={Exit}></LinkBarStyle>
    </BarStyle>
)
export default Bar;