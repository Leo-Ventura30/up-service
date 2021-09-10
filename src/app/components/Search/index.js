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
      {/* <Modal className={dropdown} modalRef={modalRef} /> */}
      <FormSearchStyle>
        <div className="content-input">
          <input type="text" placeholder="Digite o numero de telefone" />
        </div>
        <div className="content-icons content-center">
          <div onClick={toggleDropdown} className="content-add content-center">
            <div>
              <img className="content-imgs" src={User} alt="pic" />
            </div>
            <div>Novo</div>
          </div>
          <div className="content-search content-center">
            <div>
              <img className="content-imgs" src={SearchIcon} />
            </div>
            <div>Pesquisar</div>
          </div>
        </div>
      </FormSearchStyle>
      <div>
        Calendario
      </div>
      <div>
        Meus produtos
      </div>
      <div>
        Minhas vendas
      </div>
      <div>
        Ganhos\perdas
      </div>
      <div>
        Meus clientes
      </div>
      <div>
        Meu negócio
      </div>
      <div>
        Minha conta
      </div>
    </Fragment>
  );
}
