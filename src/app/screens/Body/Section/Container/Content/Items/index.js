import React, { Fragment, Component, useState, useRef } from "react";

import { ItemStyle, ContentIconStyle, ItemIconStyle } from "../../../style";

import mountLink from "../../../../../../services/zap";
import Picture from "../../../../../../assets/picture.svg";
import Edit from "../../../../../../assets/edit.svg";
import Bin from "../../../../../../assets/bin.svg";
import api from "../../../../../../services/api";
import moment from "moment";
import Popup from "../../../../../../components/Modal/popup";
export function PopupState(props, event) {
  const [dropdown = props.text] = useState("");
  console.log(dropdown);
  const modalRef = useRef(null);

  if (props.status == false) {
    return <Popup className={""} modalRef={modalRef} />;
  }
  return (
    <Popup
      className={"show"}
      modalRef={modalRef}
      id={props.idAppointment}
      onClick={event}
    />
  );
}
export default class Items extends Component {
  state = {
    appointments: [],
    employer: "",
    page: {
      actual: 1,
      items: 0,
      limit: 10,
      total: 0,
    },
    show: false,
    idClicked: "",
    error: "",
  };
  async componentDidMount() {
    if (localStorage.getItem("token")) {
      api
        .get("/dashboard/appointments", {
          headers: { "x-access-token": localStorage.getItem("token") },
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
  closeDropdown() {
    if (!!!this.state.show) {
      //se clicar fora do modal, ele DESaparece
      console.log(!!!this.state.show);
      this.setState((state) => ({ show: false }));
      document.body.removeEventListener("click", this.closeDropdown);
    }
  }
  render() {
    return (
      <Fragment>
        <PopupState
          status={this.state.show}
          idAppointment={this.state.idClicked}
        />
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
              onClick={() => this.setState({ show: true, idClicked: e.id })}
            >
              Finalizar
            </button>
            <ContentIconStyle>
              <img src={Edit} alt="pic"></img>
              <img src={Bin} alt="pic"></img>
            </ContentIconStyle>
          </ItemStyle>
        ))}
      </Fragment>
    );
  }
}
