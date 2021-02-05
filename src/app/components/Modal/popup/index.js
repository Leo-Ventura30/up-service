import React from "react";

const Popup = (props) => {
  let { className, modalRef, id } = props;
  return (
    <form id={id} ref={modalRef} className={`${className} modal`}>
      <label>Deseja mesmo finalizar?</label>
      <button type="button">Cancelar</button>
      <button onClick={props.onClick} type="button">
        Finalizar
      </button>
    </form>
  );
};

export default Popup;
