import React from "react";
import { Component } from "react";
import { Content, ContentLink, Title } from "./style";
import poste from "../../../../assets/poste.svg";
import api from "../../../../services/api";

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
        <Title>
          <img width="80px" src={poste} alt="pic"></img> | Login
        </Title>
        <form onSubmit={this.handleSubmit} method="POST">
          <div>
            <input
              placeholder="Insira seu email ou usuário"
              type="text"
              max="50"
              min="1"
              value={this.state.user}
              onChange={this.handleChangeUser}
              required
            ></input>
            <input
              placeholder="Insira sua senha"
              type="password"
              min="8"
              max="50"
              value={this.state.password}
              onChange={this.handleChangePassword}
              required
            ></input>
            <button type="submit">entrar</button>
            <ContentLink>
              <a href="/criar/conta">Criar uma conta</a>
              <a href="/esqueci/senha">Esqueceu a senha?</a>
            </ContentLink>
            <span>{this.state.error}</span>
          </div>
        </form>
      </Content>
    );
  }
}
