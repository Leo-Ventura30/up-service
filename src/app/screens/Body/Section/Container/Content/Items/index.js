import React, { Fragment, Component } from "react";

import { ItemStyle, ContentIconStyle, ItemIconStyle } from "../../../style";

import mountLink from "../../../../../../services/zap";
import Picture from "../../../../../../assets/picture.svg";
import Edit from "../../../../../../assets/edit.svg";
import Bin from "../../../../../../assets/bin.svg";
import api from "../../../../../../services/api";
import moment from "moment";
export default class extends Component {
  state = {
    appointments: [],
    error: "",
  };
  async componentDidMount() {
    if (localStorage.getItem("token")) {
      api
        .get("/dashboard/appointments", {
          headers: { "x-access-token": localStorage.getItem("token") },
        })
        .then((response) => {
          this.setState({ appointments: response.data.appointments });
        })
        .catch((error) => {
          this.setState({ error: error.message });
          localStorage.setItem("error", this.state.error);
        });
    } else {
      this.setState({ error: "Faça o login novamente!" });
      localStorage.setItem("error", this.state.error);
    }
  }
  render() {
    return (
      <Fragment>
        {this.state.error && <h1>{this.state.error}</h1>}
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
            <button>Finalizar</button>
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
