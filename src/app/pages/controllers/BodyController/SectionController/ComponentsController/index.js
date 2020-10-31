import React, { Fragment, useState, useRef } from "react";
import Picture from "../../../../../assets/picture.svg";
import Edit from "../../../../../assets/edit.svg";
import Bin from "../../../../../assets/bin.svg";
import Search from "../../../../../assets/search.svg";
import User from "../../../../../assets/adduser.svg";
import Modal from "../../../../../components/Modal/";

import {
  FormSearchStyle,
  ImageStyle,
  AdduserStyle,
} from "../ContentController/style";

import {
  ComponentStyle,
  ItemStyle,
  ListContentStyle,
  ContentIconStyle,
} from "./style";

export default function UserComponent() {
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
          <ImageStyle src={Search}></ImageStyle>
        </button>
      </FormSearchStyle>
      <ComponentStyle>
        <ListContentStyle>
          <ItemStyle>
            <img src={Picture} alt="pic"></img>
            <div>talhitão</div>
            <ul>
              <li>12/10</li>
              <li>12:30</li>
              <li>Corte de cabelo</li>
            </ul>
            <button>Finalizar</button>
            <ContentIconStyle>
              <img src={Edit} alt="pic"></img>
              <img src={Bin} alt="pic"></img>
            </ContentIconStyle>
          </ItemStyle>
          <ItemStyle>
            <img src={Picture} alt="pic"></img>
            <div>talhitão</div>
            <ul>
              <li>15/10</li>
              <li>14:30</li>
              <li>Barba</li>
            </ul>
            <button>Finalizar</button>
            <ContentIconStyle>
              <img src={Edit} alt="pic"></img>
              <img src={Bin} alt="pic"></img>
            </ContentIconStyle>
          </ItemStyle>
        </ListContentStyle>
      </ComponentStyle>
    </Fragment>
  );
}
