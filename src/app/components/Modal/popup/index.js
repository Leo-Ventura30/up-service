import React from "react";

const Popup = (props) => {
  let { className, modalRef, id } = props;
  const remove = () => {
    props.className = "ola";
  };
  return (
    <form id={id} ref={modalRef} className={`${className} modal`}>
      <label>Deseja mesmo finalizar?</label>
      <button type="button">Cancelar</button>
      <button
        onClick={(e) => e.target.addEventListener("click", remove)}
        type="button"
      >
        Finalizar
      </button>
    </form>
  );
};

export default Popup;
