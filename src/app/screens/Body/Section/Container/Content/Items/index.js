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
    console.log(this.state.appointments);
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
    console.log(this.props);
  };
  finalizeAppointment = () => {
    api
      .delete(`/dashboard/appointments/delete/${this.idAppointment}`, {
        headers: this.state.token,
      })
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
        {this.state.appointments <= 0 && (
          <SpanEmpty>Não há agendamentos!</SpanEmpty>
        )}
        {this.state.appointments.map((e) => (
          <ItemStyle key={e.id}>
            <ItemIconStyle
              className="person-pic"
              src={Picture}
              alt="pic"
            ></ItemIconStyle>
            <ul>
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
              <li>
                <p>{moment(e.date).format("DD/MM")}</p>
              </li>
              <li>
                <p>{moment(e.date).format("hh:mm")}</p>
              </li>
              <li>
                <p>{e.type}</p>
              </li>
            </ul>
            <button
              onClick={() => {
                this.setState({ submitting: true });
                this.closeAppointment(e.id);
              }}
              disabled={this.state.submitting}
            >
              Finalizar
            </button>
            <ContentIconStyle>
              <img disabled={this.state.submitting} src={Edit} alt="pic"></img>
              <img
                onClick={() => {
                  this.setState({ submitting: true });
                  this.closeAppointment(e.id);
                }}
                disabled={this.state.submitting}
                src={Bin}
                alt="pic"
              ></img>
            </ContentIconStyle>
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
