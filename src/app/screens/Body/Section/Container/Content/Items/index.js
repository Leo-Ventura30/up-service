import React, { Fragment, Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {
  ItemStyle,
  ContentIconStyle,
  ItemIconStyle,
  SpanEmpty,
} from "../../../style";

import mountLink from "../../../../../../services/zap";
import Picture from "../../../../../../assets/picture.svg";
import Edit from "../../../../../../assets/edit.svg";
import Bin from "../../../../../../assets/bin.svg";
import api from "../../../../../../services/api";
import moment from "moment";
import Popup from "../../../../../../components/Modal/popup";
import { off, on } from "../../../../../../store/actions/popup";
import { PopupContentShow } from "../../../style";
class Items extends Component {
  state = {
    appointments: [],
    submitting: false,
    page: {
      actual: 1,
      items: 0,
      limit: 10,
      total: 0,
    },
    token: { "x-access-token": localStorage.getItem("token") },
    error: "",
  };
  idAppointment = "";
  componentDidMount() {
    if (localStorage.getItem("token")) {
      api
        .get("/dashboard/appointments", {
          headers: this.state.token,
        })
        .then((response) => {
          this.setState({
            appointments: response.data.appointments,
          });
          if (!localStorage.getItem("datas")) {
            this.setState({ error: "Erro undefined" });
          }
        })
        .catch((error) => {
          this.setState({ error: error.message });
          localStorage.setItem("error", this.state.error);
        });
    }
  }
  closeDropdown = () => {
    this.props.off();
    this.setState({ submitting: false });
  };

  closeAppointment = (e) => {
    this.idAppointment = e;
    this.props.on();
  };
  deleteAppointment = () => {
    api
      .delete(`/dashboard/appointments/delete/${this.idAppointment}`, {
        headers: this.state.token,
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  finalizeAppointment = () => {
    api
      .put(
        `/dashboard/appointment/${this.idAppointment}/closing`,
        { status: 0 },
        {
          headers: this.state.token,
        }
      )
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  render() {
    return (
      <Fragment>
        <PopupContentShow>
          {this.props.show === true && (
            <Popup
              onSubmit={this.finalizeAppointment}
              onClick={this.closeDropdown}
              className={"show-popup"}
            />
          )}
        </PopupContentShow>
        {this.state.appointments < 1 && (
          <SpanEmpty>Não á nenhum serviço proximo!</SpanEmpty>
        )}
        {this.state.appointments &&
          this.state.appointments.map((e) => (
            <ItemStyle key={e.id}>
              <div>
                <ul>
                  <div className="item-header">
                    <div className="item-pic">
                      <ItemIconStyle
                        className="person-pic"
                        src={Picture}
                        alt="pic"
                      ></ItemIconStyle>
                    </div>
                    <div className="item-person">
                      <li>
                        <p>{e.users_id.name}</p>
                      </li>
                      <li>
                        <p>
                          <a href={mountLink(e)} target="_blank">
                            {e.users_id.phone}
                          </a>
                        </p>
                      </li>
                    </div>
                    <div className="item-day">
                      <p>{moment(e.date).format("DD")}</p>
                    </div>
                  </div>
                  <div className="item-info">
                    <li>
                      <p>{moment(e.date).format("DD/MM")}</p>
                    </li>
                    <li>
                      <p>{moment(e.date).format("hh:mm")}</p>
                    </li>
                    <li>
                      <p>{e.type}</p>
                    </li>
                  </div>
                </ul>
              </div>
              <div className="item-buttons">
                <button
                  onClick={() => {
                    this.setState({ submitting: true });
                    this.closeAppointment(e.id);
                  }}
                  disabled={this.state.submitting}
                >
                  Finalizar
                </button>
                <button
                  onClick={() => {
                    this.setState({ submitting: true });
                    this.closeAppointment(e.id);
                  }}
                  disabled={this.state.submitting}
                >
                  Editar
                </button>
              </div>
            </ItemStyle>
          ))}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  show: state.popup.show,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ off, on }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Items);
