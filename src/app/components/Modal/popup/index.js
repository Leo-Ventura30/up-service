import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { off, on } from "../../../store/actions/popup";
import { PopupContent, ButtonContent } from "./style";

const Popup = (props) => {
  let { className, modalRef, onClick, onSubmit } = props;

  return (
    <PopupContent>
      <form onSubmit={onSubmit} ref={modalRef} className={`${className}`}>
        <label>Deseja mesmo finalizar?</label>
        <ButtonContent>
          <button type="button" onClick={onClick} className="cancel-button">
            Cancelar
          </button>
          <button type="submit">Finalizar</button>
        </ButtonContent>
      </form>
    </PopupContent>
  );
};

const mapStateToProps = (state) => ({
  show: state.popup.show,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ off, on }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
