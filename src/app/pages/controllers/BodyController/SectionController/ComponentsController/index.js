import React,{Component} from "react";
import Picture from '../../../../../assets/picture.svg';
import Edit from '../../../../../assets/edit.svg';
import Bin from '../../../../../assets/bin.svg';

import { ComponentStyle, ItemStyle, ListContentStyle, ContentIconStyle} from './style';
export default class UserComponent extends Component{
  
  render(){
    return(
      <ComponentStyle>
      <ListContentStyle>
      <ItemStyle>
          <img src={Picture} alt='pic'></img>
          <div>
            talhitão
          </div>
          <ul>
            <li>12/10</li>
            <li>12:30</li>
            <li>Corte de cabelo</li>
          </ul>
          <button>Finalizar</button>
          <ContentIconStyle>
            <img src={Edit} alt='pic'></img>
            <img src={Bin} alt='pic'></img>
          </ContentIconStyle>
        </ItemStyle>
        <ItemStyle>
          <img src={Picture} alt='pic'></img>
          <div>
            talhitão
          </div>
          <ul>
            <li>15/10</li>
            <li>14:30</li>
            <li>Barba</li>
          </ul>
          <button>Finalizar</button>
          <ContentIconStyle>
            <img src={Edit} alt='pic'></img>
            <img src={Bin} alt='pic'></img>
          </ContentIconStyle>
        </ItemStyle>
      </ListContentStyle>
    </ComponentStyle>
    )
  }
}
