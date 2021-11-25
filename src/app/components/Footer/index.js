import React from "react";
import Styled from "styled-components";

const Fot = Styled.footer`
  margin-top:1%;
  max-height:max-content;
  height:20%;
  width:100%;
  font-family:roboto;
  font-size:1.4vw;
  color:#fff;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:3%;
  background:rgba(0,0,0,1);
  border-radius:20px 20px 0 0;
  @media screen and (max-width:768px) {
    &{
      visibility:hidden;
    }
  }
`;
export const Footer = () => (
  <Fot>
    Copyright © {new Date().getFullYear()} by Gotom - multi mercado digital.
    Todos os direitos são reservados.
  </Fot>
);
