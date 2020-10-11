import React,{ Component } from "react";
import Search from '../../../../../assets/search.svg';
import User from '../../../../../assets/adduser.svg';
import UserComponent from '../ComponentsController';

import { ContentStyle, FormSearchStyle, ImageStyle, AdduserStyle} from './style';

export default class Content extends Component{

  render(){
    return(
      <ContentStyle>
        <FormSearchStyle>
          <AdduserStyle src={User} alt='pic'></AdduserStyle>
          <input type="text" placeholder="Pesquise um cliente ou agendamento"></input>
          <button type="submit"><ImageStyle src={Search}></ImageStyle></button>
        </FormSearchStyle>
        <UserComponent></UserComponent>
      </ContentStyle>
    )
  }
}
  