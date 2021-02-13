import React from "react";
import { Component } from "react";
import { Content, ContentLink, Title } from "../style";
import api from "../../../services/api";

import poste from "../../../assets/barbearia.svg";
import commerce from "../../../assets/store.svg";
import category from "../../../assets/category.svg";
import email from "../../../assets/email.svg";
import user from "../../../assets/user.svg";
import password from "../../../assets/key.svg";

export default class signin extends Component {
  state = {
    commerce: "",
    category: "",
    uf: "",
    city: "",
    email: "",
    user: "",
    password: "",
    alert: "",
    success: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState(() => ({ success: "", alert: "" }));

    const { ...datas } = this.state;
    if (!true) {
      this.setState({ alert: "Preencha todos os campos!" });
    } else {
      try {
        const response = await api.post("/register", {
          ...datas,
        });
        if (!response.data.success) {
          throw new Error(response.data);
        }
        this.setState({ success: response.data.success });
        this.clearState();
      } catch (error) {
        this.setState({ alert: error.message });
      }
    }
  };
  clearState() {
    this.setState(() => ({
      commerce: "",
      category: "",
      uf: "",
      city: "",
      email: "",
      user: "",
      password: "",
      alert: "",
    }));
  }
  handleChangeCommerce = (e) => {
    this.setState({ commerce: e.target.value });
  };
  handleChangeCategory = (e) => {
    this.setState({ category: e.target.value });
  };
  handleChangeUf = (e) => {
    this.setState({ uf: e.target.value });
  };
  handleChangeCity = (e) => {
    this.setState({ city: e.target.value });
  };
  handleChangeEmail = (e) => {
    this.setState({ email: e.target.value });
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
        <title>Cadastro | Up Barber</title>
        {this.state.alert && <span className="error">{this.state.alert}</span>}
        {this.state.success && (
          <span className="success">{this.state.success}</span>
        )}
        <Title>
          <img src={poste} alt="pic"></img> | Cadastro
        </Title>
        <form onSubmit={this.handleSubmit} method="POST">
          <div className="content-input">
            <img width="45px" height="45px" src={commerce} alt="icon" />
            <input
              placeholder="Nome do comércio"
              type="text"
              max="50"
              min="1"
              value={this.state.commerce}
              onChange={this.handleChangeCommerce}
            />
          </div>
          <div className="content-input">
            <img width="45px" height="45px" src={category} alt="icon" />
            <input
              placeholder="Categoria"
              type="text"
              max="50"
              min="2"
              value={this.state.category}
              onChange={this.handleChangeCategory}
            />
          </div>
          <div className="content-select">
            <select
              onChange={this.handleChangeUf}
              value={this.state.uf}
              id="uf"
              type="select"
            >
              <option color="#777" value="null">
                UF
              </option>
              <option value="SP">SP</option>
            </select>
            <select
              onChange={this.handleChangeCity}
              value={this.state.city}
              id="municipio"
              type="select"
            >
              <option color="#777" value="null">
                Município
              </option>
              <option value="Santo André">Santo André</option>
            </select>
          </div>
          <div className="content-input">
            <img width="45px" height="45px" src={email} alt="icon" />
            <input
              placeholder="E-mail"
              type="text"
              max="50"
              min="10"
              value={this.state.email}
              onChange={this.handleChangeEmail}
            />
          </div>
          <div className="content-input">
            <img width="45px" height="45px" src={user} alt="icon" />
            <input
              placeholder="Usuário"
              type="text"
              max="50"
              min="5"
              value={this.state.user}
              onChange={this.handleChangeUser}
            />
          </div>
          <div className="content-input">
            <img width="45px" height="45px" src={password} alt="icon" />
            <input
              placeholder="Senha"
              type="password"
              min="8"
              max="50"
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
          </div>

          <button type="submit">criar</button>
          <ContentLink>
            <a href="/">Ja possui uma conta?</a>
          </ContentLink>
        </form>
      </Content>
    );
  }
}
