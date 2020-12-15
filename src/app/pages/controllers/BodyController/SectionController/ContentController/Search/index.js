import React, { useState, useRef } from "react";

import Modal from "../../../../../../components/Modal";

import User from "../../../../../../assets/adduser.svg";
import SearchIcon from "../../../../../../assets/search.svg";

import {
  FormSearchStyle,
  InputStyle,
  ImageStyle,
  AdduserStyle,
} from "../../style";

export default function Search() {
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
  return (
    <FormSearchStyle>
      <Modal className={dropdown} modalRef={modalRef} />
      <AdduserStyle
        className="send-search"
        src={User}
        alt="pic"
        onClick={toggleDropdown}
      />
      <InputStyle
        className="send-search"
        name="search-schedule"
        type="text"
        placeholder="Busque um cliente"
      />
      <ImageStyle className="send-search" src={SearchIcon} />
    </FormSearchStyle>
  );
}
