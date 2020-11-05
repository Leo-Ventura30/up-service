import React from "react";
import Styled from "styled-components";
import barber from "../../../../assets/barbearia.svg";

const Title = Styled.div`
  display:flex;
  align-items:center;
  text-transform:uppercase;
  font-family: 'Chilanka', cursive;
  font-size:40px;
  font-weight:bold;
  max-width:max-content;
  margin-bottom:5%;
`;
const Content = Styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background:rgba(0,150,255,0.3);
  border-radius:10px;
  width:max-content;
  height:530px;
  top:10%;
  left:4%;
  border:3px outset rgba(230,230,230,0.5);
  position:absolute;
  padding:15% 5% 15% 5%;
  form{
    height:370px;
    width:90%;
    display:flex;
    background:rgba(5,5,5,0.4);
    padding:2%;
    border-radius:10px;
    div{
      width:100%;
      display:flex;
      flex-direction:column;  
      align-items:center;
      margin-top:5%;
      button{
        font-family:roboto;
        font-size:20px;
        min-height:max-content;
        width:90%;
        margin-top:10%;
        padding:2%;
        text-transform:uppercase;
        border:0;
        border-radius:3px;
        background:rgba(0,120,255,0.9);
        cursor:pointer;
        &:hover{
          color:#fff;
          background:rgba(0,200,255,0.9);
        }
      }
      input{
        font-family:roboto;
        font-size:14px;
        color:rgb(55,55,55);
        padding-left:2%;
        margin-top:3%;
        height:35px;
        width:90%;
        border-radius:5px;
        &:focus{
          border:2px solid rgba(0,120,255,0.9);
        }    
      }
    }
  }
  
`;
const ContentLink = Styled.div`
  a{
    min-height:5px;
    text-decoration:none;
    color:#fff;
    &:hover{
      color:#888;
    }
}
`;

function signout() {
  return (
    <Content>
      <Title>
        <img width="70px" src={barber} alt="pic"></img> | Cadastro
      </Title>
      <form>
        <div>
          <input
            placeholder="Nome do seu comércio"
            type="text"
            max="50"
            min="1"
            required
          ></input>
          <input
            placeholder="Insira seu nome"
            type="text"
            max="50"
            min="1"
            required
          ></input>
          <input
            placeholder="Insira um email"
            type="text"
            min="8"
            max="50"
            required
          ></input>
          <input
            placeholder="Insira um usuário"
            type="text"
            max="50"
            min="1"
            required
          ></input>
          <input
            placeholder="Insira sua senha"
            type="password"
            max="50"
            min="1"
            required
          ></input>
          <button type="submit">cadastrar</button>
          <ContentLink>
            <a href="/">Ja possuo uma conta</a>
          </ContentLink>
        </div>
      </form>
    </Content>
  );
}

export default signout;
