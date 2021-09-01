import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { Content, ContentLink, Title } from "../style";
import api from "../../../services/api";
import { login } from "../../../services/auth";

import poste from "../../../assets/poste.svg";
import user from "../../../assets/user.svg";
import key from "../../../assets/key.svg";

class signin extends Component {
  state = {
    user: "",
    password: "",
    response: {
      employer: {},
      token: "",
    },
    error: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { user, password } = this.state;
    if (!user || !password) {
      this.setState({ error: "Preencha todos os campos!" });
    } else {
      try {
        const response = await api.post('/signin/dashboard')
        login("fuck")
        this.props.history.push("/dashboard")
      } catch (error) {
        this.setState({ error: "Usuário ou senha invalidos!" });
        setTimeout(
          () => this.setState({ error: "", user: "", password: "" }),
          1500
        );
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
          IC | Login
        </Title>
        
        <form method="POST" onSubmit={this.handleSubmit}>
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
