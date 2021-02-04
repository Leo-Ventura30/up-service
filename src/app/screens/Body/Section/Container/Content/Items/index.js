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
    employer: "",
    page: {
      actual: 1,
      items: 0,
      limit: 10,
      total: 0,
    },
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
          this.mountComponents(this.state.appointments);

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
  mountComponents(e) {
    let totalItems = e.length - 1;
    let totalPage = Math.ceil(totalItems / this.state.page.limit);
    let actualPage = 1;
    let items = [];
    for (
      var item = 1 + (this.state.page.actual - 1) * this.state.page.limit;
      item <= actualPage * this.state.page.limit && item <= totalItems;
      item++
    ) {
      console.log(item);
      items[item - 1] = e[item];
    }
    this.setState({
      page: { actual: actualPage, items: items, limit: 10, total: totalPage },
    });
    console.log(this.state.page);
    // for (
    //   var item = 1 + (this.state.page.actual - 1) * this.state.page.limit;
    //   item <= this.state.page.actual * this.state.page.limit &&
    //   item <= this.state.page.items;
    //   item++
    // ) {
    //   console.log("e");
    // }
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
