import React, { useState, useRef } from "react";
import Adduser from "../../../../assets/adduser.svg";
import Configuration from "../../../../assets/configuration.svg";
import { Link } from "react-router-dom";
import Exit from "../../../../assets/exit.svg";
import Home from "../../../../assets/home.svg";
import Calendar from "../../../../assets/calendar.svg";
import Modal from "../../../../components/Modal";
import { BarStyle, LinkBarStyle } from "./style";

const Bar = () => {
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
    <BarStyle>
      <Modal className={dropdown} modalRef={modalRef} />
      <Link to="/dashboard">
        <LinkBarStyle src={Home}></LinkBarStyle>
      </Link>

      <LinkBarStyle onClick={toggleDropdown} src={Adduser}></LinkBarStyle>
      <Link to="/dashboard/calendar">
        <LinkBarStyle src={Calendar}></LinkBarStyle>
      </Link>
      <Link to="/dashboard/perfil/options">
        <LinkBarStyle src={Configuration}></LinkBarStyle>
      </Link>
      <LinkBarStyle src={Exit}></LinkBarStyle>
    </BarStyle>
  );
};
export default Bar;
