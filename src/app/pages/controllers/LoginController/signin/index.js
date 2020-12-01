import React from "react";
import { Component } from "react";
import { Content, ContentLink, Title } from "../style";
import poste from "../../../../assets/poste.svg";
import api from "../../../../services/api";
import user from "../../../../assets/user.svg";
import key from "../../../../assets/key.svg";

export default class signin extends Component {
  state = {
    user: "",
    password: "",
    error: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ error: "" });
    const response = await api.post("/signin", {
      user: this.state.user,
      password: this.state.password,
    });
    if (response.data !== true) {
      this.setState({ error: response.data });
    }
    console.log(response.data);
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
        {this.state.error && <span>{this.state.error}</span>}

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
              required
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
              required
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
