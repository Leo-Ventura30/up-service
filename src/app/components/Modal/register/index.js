import React from "react";
// import api from "../../../services/api";
import "./style.css";
const Modal = (props) => {
  const { className, modalRef, startDate, addEvent, onChange } = props;
  const [handleChangeTitle, handleChangeDescription] = onChange
  return (
    <form onSubmit={addEvent}>
      <div ref={modalRef} className={`${className} modal`}>
        <div className="div-title">Agendar um novo usuário</div>
        <div className="form-modal">
          <input
            className="input-form"
            type="text"
            placeholder="Insira um titulo"
            onChange={event=> handleChangeTitle(event.target.value)}
          />
          <input
            className="input-form"
            type="text"
            placeholder="Descrição"
            onChange={event=> handleChangeDescription(event.target.value)}
          />
          <input
            className="input-form"
            type="text"
            placeholder="Endereço"
          />
          <input
            className="input-form"
            type="datetime-local"
          />
          <input
            className="input-form"
            type="text"
            placeholder="Valor"
          />
          <button className="button-form" type="submit">
            Agendar
          </button>
        </div>
      </div>
    </form>
  );
};

export default Modal;
