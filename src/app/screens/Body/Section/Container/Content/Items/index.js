import React, { Fragment, Component, useState, useRef } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { ItemStyle, ContentIconStyle, ItemIconStyle } from "../../../style";

import mountLink from "../../../../../../services/zap";
import Picture from "../../../../../../assets/picture.svg";
import Edit from "../../../../../../assets/edit.svg";
import Bin from "../../../../../../assets/bin.svg";
import api from "../../../../../../services/api";
import moment from "moment";
import Popup from "../../../../../../components/Modal/popup";
import { off, on } from "../../../../../../store/actions/popup";

class Items extends Component {
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
  componentDidMount() {
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
  closeDropdown = (event) => {
    event.preventDefault();
    this.props.off();
  };
  render() {
    return (
      <Fragment>
        {this.props.show && (
          <Popup onClick={this.closeDropdown} className={"show"} />
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
            <button onClick={() => this.props.on()}>Finalizar</button>
            <ContentIconStyle>
              <img onClick={() => this.props.off()} src={Edit} alt="pic"></img>
              <img src={Bin} alt="pic"></img>
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
