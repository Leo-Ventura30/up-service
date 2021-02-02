import React, { Fragment, Component } from "react";

import { ItemStyle, ContentIconStyle, ItemIconStyle } from "../../../style";

import mountLink from "../../../../../../services/zap";
import Picture from "../../../../../../assets/picture.svg";
import Edit from "../../../../../../assets/edit.svg";
import Bin from "../../../../../../assets/bin.svg";
import api from "../../../../../../services/api";
import { useHistory } from "react-router-dom";

export default class extends Component {
  state = {
    appointments: [],
  };

  async componentDidMount() {
    if (localStorage.getItem("token")) {
      const response = await api.get("/dashboard/appointments", {
        headers: { "x-access-token": localStorage.getItem("token") },
      });
      if (response.status == 500) {
        useHistory().push("/");
      } else {
        this.setState({ appointments: response.data.appointments });
      }
    } else {
      useHistory().push("/");
    }
  }
  render() {
    return (
      <Fragment>
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
                <p>{e.date.split("T")[0]}</p>
              </li>
              <li>
                <p>{e.date.split("T")[1].split(".")[0]}</p>
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
