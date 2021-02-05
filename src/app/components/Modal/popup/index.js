import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { off, on } from "../../../store/actions/popup";

const Popup = (props) => {
  let { className, modalRef, id } = props;
  const remove = () => {
    props.className = "ola";
  };
  return (
    <form id={id} ref={modalRef} className={`${className}`}>
      <label>Deseja mesmo finalizar?</label>
      <button onClick={() => props.off()} type="button">
        Cancelar
      </button>
      <button type="button">Finalizar</button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  show: state.popup.show,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ off, on }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
