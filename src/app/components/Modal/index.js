import React from "react";
import "./style.css";
const Modal = (props) => {
  const { className, modalRef } = props;
  return (
    <div ref={modalRef} className={`${className} modal`}>
      <div className="div-title">Agendar um novo usuário</div>
      <div className="form-modal">
        <form>
          <input
            required
            className="input-form"
            type="text"
            placeholder="Insira o nome"
          ></input>
          <input
            required
            className="input-form"
            type="datetime-local"
            placeholder="Insira o dia"
          ></input>
          <select id="type-modal" name="type">
            <option>Tipo de serviço</option>
            <option value="Barba">Barba</option>
            <option value="Corte">Corte</option>
            <option value="Pacote">Pacote</option>
            <option value="Luzes">Luzes</option>
          </select>
          <button className="button-form" type="submit">
            Agendar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
