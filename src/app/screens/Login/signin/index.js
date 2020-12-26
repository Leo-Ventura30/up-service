import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { Content, ContentLink, Title } from "../style";
import api from "../../../services/api";

import poste from "../../../assets/poste.svg";
import user from "../../../assets/user.svg";
import key from "../../../assets/key.svg";
import { login } from "../../../services/auth";

class signin extends Component {
  state = {
    user: "",
    password: "",
    response: {},
    error: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { user, password } = this.state;
    if (!user || !password) {
      this.setState({ error: "Preencha todos os campos!" });
    } else {
      try {
        const response = await api.post("/signin", {
          user: this.state.user,
          password: this.state.password,
        });

        if (response.data.status !== true) {
          throw new Error(response.data);
        } else {
          login(response.data.token);
          console.log();
          // this.setState({ response: response.data });
          this.props.history.push("/dashboard");
        }
      } catch (error) {
        this.setState({ error: error.message });
      }
    }
  };

  handleChangeUser = (e) => {
    this.setState({ user: e.target.value });
  };
  handleChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  render() {
    return (
      <Content>
        {this.state.error && <span className="error">{this.state.error}</span>}

        <title>Login | Up Barber</title>
        <Title>
          <img src={poste} alt="pic"></img> | Login
        </Title>
        <form onSubmit={this.handleSubmit} method="POST">
          <div className="content-input">
            <img width="45px" height="45px" src={user} alt="icon" />
            <input
              placeholder="E-mail ou usuário"
              type="text"
              max="50"
              min="1"
              value={this.state.user}
              onChange={this.handleChangeUser}
            />
          </div>
          <div className="content-input">
            <img width="45px" height="45px" src={key} alt="icon" />
            <input
              placeholder="Senha"
              type="password"
              min="8"
              max="50"
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
          </div>

          <button type="submit">entrar</button>
          <ContentLink>
            <a href="/criar/conta">Criar uma conta</a>
            <a href="/esqueci/senha">Esqueceu a senha?</a>
          </ContentLink>
        </form>
      </Content>
    );
  }
}

export default withRouter(signin);
