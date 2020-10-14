import React,{ useState, useRef } from "react";
import Search from '../../../../../assets/search.svg';
import User from '../../../../../assets/adduser.svg';
import UserComponent from '../ComponentsController';
import Modal from '../../../../../components/Modal/'
import './style.css';
import { ContentStyle, FormSearchStyle, ImageStyle, AdduserStyle} from './style';

const Content = () => {

  const [dropdown, setDropdown] = useState(""); 
  const modalRef = useRef(null);

  const toggleDropdown = () => {
    //se clicar no botão, modal aparece
    setDropdown("show");
    document.body.addEventListener("click", closeDropdown);
  }

  const closeDropdown = event => {
    event.stopPropagation(); 
    const contain = modalRef.current.contains(event.target);
    if (!!!contain) { //se clicar fora do modal, ele DESaparece
      setDropdown("");
      document.body.removeEventListener("click", closeDropdown);
    }
  };
    return(
      <ContentStyle>
        <FormSearchStyle>
          <AdduserStyle src={User} alt='pic' onClick={toggleDropdown}></AdduserStyle>
          <input type="text" placeholder="Pesquise um cliente ou agendamento"></input>
          <button type="submit"><ImageStyle src={Search}></ImageStyle></button>
        </FormSearchStyle>
        <Modal className={dropdown} modalRef={modalRef}/> 
        <UserComponent></UserComponent>
      </ContentStyle>
    )
}

export default Content;