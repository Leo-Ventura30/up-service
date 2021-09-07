import React from "react";
import api from "../../../services/api";
import "./style.css";
const Modal = (props) => {
  const { className, modalRef } = props;
  let data = {
    name: null,
    phone: null,
    endereço:null,
    date: null,
    appointment: {
      type: null,
      value: 0,
    },
  };
  const submitAppointment = () => {
    console.log(data);
    api
      .post("/dashboard/user/create", data, {
        headers: { "x-access-token": localStorage.getItem("token") },
      })
      .then((e) => {
        console.log(e);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleChangePhone = (e) => {
    data.phone = e.target.value;
  };
  const handleChangeName = (e) => {
    data.name = e.target.value;
  };
  const handleChangeEndereço = (e) => {
    data.endereço = e.target.value;
  };
  const handleChangeDate = (e) => {
    data.date = e.target.value;
  };
  const handleChangeService = (e) => {
    data.appointment.type = e.target.value;
  };
  const handleChangeValue = (e) => {
    data.appointment.value = e.target.value;
  };
  return (
    <form onSubmit={submitAppointment}>
      <div ref={modalRef} className={`${className} modal`}>
        <div className="div-title">Agendar um novo usuário</div>
        <div>{ console.log(props)}</div>
        <div className="form-modal">
          <input
            required
            className="input-form"
            type="text"
            placeholder="Numero de Telefone"
            min="9"
            max="11"
            onChange={handleChangePhone}
          />
          <input
            required
            className="input-form"
            type="text"
            placeholder="Nome"
            onChange={handleChangeName}
          />
          <input
            className="input-form"
            type="text"
            placeholder="Endereço"
            onChange={handleChangeEndereço}
          />
          <input
            required
            className="input-form"
            type="datetime-local"
            onChange={handleChangeDate}
          />
          <select id="type-modal" onChange={handleChangeService}>
            <option>Tipo de serviço</option>
          </select> +
          <input
            className="input-form"
            type="text"
            placeholder="Valor"
            onChange={handleChangeValue}
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
