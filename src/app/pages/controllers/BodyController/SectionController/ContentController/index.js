import React from "react";
import Search from '../../../../../assets/search.svg';
import Component from '../ComponentsController';

import { ContentStyle, FormSearchStyle, ImageStyle} from './style';

const Content = ()=> (
    <ContentStyle>
      <FormSearchStyle>
        <input type="text" placeholder="Pesquise um cliente ou agendamento"></input>
        <button type="submit"><ImageStyle src={Search}></ImageStyle></button>
      </FormSearchStyle>
      <Component></Component>
    </ContentStyle>
)
  
export default Content;