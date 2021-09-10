import React from "react";
// import api from "../../../services/api";
import "./style.css";
export default function Modal(props) {
  const { className, onSubmitAppoitment, onChange, onCloseModal, selectDate } = props;
  const { handleChangeTitle, handleChangeDescription, handleChangeService, handleChangeValue } = onChange
  console.log(selectDate)
  return (
    <form onSubmit={onSubmitAppoitment}>
      <div className={`${className} modal`}>
        <div className="div-title">
          <button onClick={onCloseModal}>X</button>
          <div>Agendar um novo usuário</div>
        </div>
        <div className="form-modal">
          <input
            className="input-form"
            type="text"
            placeholder="Data inicio"
            onChange={event => handleChangeTitle(event.target.value)}
            defaultValue={selectDate.startDate}
          />
          <input
            className="input-form"
            type="text"
            placeholder="Data final"
            onChange={event => handleChangeTitle(event.target.value)}
            defaultValue={selectDate.endDate}
          />
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
          {/* <input
            className="input-form"
            type="text"
            placeholder="Endereço"
          />
          <input
            className="input-form"
            type="datetime-local"
          /> */}
          <input
            className="input-form"
            type="text"
            placeholder="Insira o serviço"
            onChange={event=> handleChangeService(event.target.value)}
          />
          <input
            className="input-form"
            type="text"
            placeholder="Valor"
            onChange={event=> handleChangeValue(event.target.value)}
          />
          <button className="button-form">
            Agendar
          </button>
        </div>
      </div>
    </form>
  );
};
