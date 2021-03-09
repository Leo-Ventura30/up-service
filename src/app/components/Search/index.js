import React, { useState, useRef, Fragment } from "react";

import Modal from "../Modal/register";

import User from "../../assets/adduser.svg";
import SearchIcon from "../../assets/search.svg";

import { FormSearchStyle, InputStyle, ImageStyle, AdduserStyle } from "./style";

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
    <Fragment>
      <Modal className={dropdown} modalRef={modalRef} />
      <FormSearchStyle>
        <div className="content-input">
          <input type="text" placeholder="Busque um cliente" />
        </div>
        <div className="content-icons content-center">
          <div className="content-add content-center">
            <img
              className="content-imgs"
              src={User}
              alt="pic"
              onClick={toggleDropdown}
            />
          </div>
          <div className="content-search content-center">
            <img className="content-imgs" src={SearchIcon} />
          </div>
        </div>
      </FormSearchStyle>
    </Fragment>
  );
}
