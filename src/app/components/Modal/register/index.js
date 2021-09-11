import React from "react";
// import api from "../../../services/api";
import "./style.css";
export const Modal = ({ className, onSubmitAppoitment, onChange, onCloseModal, selectDate}) => {
  const { handleChangeTitle, handleChangeDescription, handleChangeService, handleChangeValue } = onChange

  return (
    <form onSubmit={onSubmitAppoitment}>
      <div className={`${className} modal`}>
        <div className="div-title">
          <button onClick={onCloseModal}>X</button>
          <div>Agendar um novo usuário</div>
        </div>
        <div className="form-modal">
          <div>
            <input
              className="input-form"
              type="text"
              placeholder="Data Ex.:dia/mes/ano"
              defaultValue={selectDate.startDate}
              disabled
            />
            <input
              className="input-form"
              type="text"
              placeholder="Horário Ex.:horas:minutos"
              defaultValue={selectDate.endDate}
              disabled
            />
          </div>
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
