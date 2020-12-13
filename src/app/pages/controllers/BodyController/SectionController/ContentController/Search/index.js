import React,{useState, useRef} from "react"

import Modal from "../../../../../../components/Modal";

import User from "../../../../../../assets/adduser.svg";
import SearchIcon from "../../../../../../assets/search.svg";

import {
    FormSearchStyle,
    ImageStyle,
    AdduserStyle,
    ComponentStyle,
    ItemStyle,
    ListContentStyle,
    ContentIconStyle,
  } from "../../style";

export default function Search(){
    const [dropdown, setDropdown] = useState("");
    const modalRef = useRef(null);

    const toggleDropdown = () => {
        //se clicar no botão, modal aparece
        setDropdown("show");
        document.body.addEventListener("click", closeDropdown);
    };

    const closeDropdown = (event) => {
    event.stopPropagation();
    const contain = modalRef.current.contains(event.target);
    if (!!!contain) {
      //se clicar fora do modal, ele DESaparece
      setDropdown("");
      document.body.removeEventListener("click", closeDropdown);
    }
  };
  return(
    <FormSearchStyle>
        <Modal className={dropdown} modalRef={modalRef} />

        <AdduserStyle
          src={User}
          alt="pic"
          onClick={toggleDropdown}
        ></AdduserStyle>
        <input
          name="search-schedule"
          type="text"
          placeholder="Pesquise um cliente ou agendamento"
        ></input>
        <button name="send_search" type="submit">
          <ImageStyle src={SearchIcon}></ImageStyle>
        </button>
    </FormSearchStyle>
    )
}
