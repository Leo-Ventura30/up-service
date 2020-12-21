import React, { Fragment } from "react";

import mountLink from "../../../../../services/zap";
import Picture from "../../../../../assets/picture.svg";
import Edit from "../../../../../assets/edit.svg";
import Bin from "../../../../../assets/bin.svg";

import {
  ComponentStyle,
  ItemStyle,
  ListContentStyle,
  ContentIconStyle,
  ItemIconStyle,
} from "../../style";

function UserComponent() {
  const user = [
    {
      nome: "Leo",
      number: "998296602",
      dia: "11/12",
      hora: "12:12",
      servico: "Completo",
    },
    {
      nome: "Leo",
      number: "998296602",
      dia: "11/12",
      hora: "12:12",
      servico: "Completo",
    },
    {
      nome: "Leo",
      number: "998296602",
      dia: "11/12",
      hora: "12:12",
      servico: "Completo",
    },
    {
      nome: "Leo",
      number: "998296602",
      dia: "11/12",
      hora: "12:12",
      servico: "Completo",
    },
    {
      nome: "Talhita",
      number: "998629594",
      dia: "11/12",
      hora: "12:12",
      servico: "Tosa",
    },
    {
      nome: "Leo",
      number: "998296602",
      dia: "11/12",
      hora: "12:12",
      servico: "Completo",
    },
  ];

  return (
    <Fragment>
      <ComponentStyle>
        <ListContentStyle>
          {user.map((e) => (
            <ItemStyle>
              <ItemIconStyle
                className="person-pic"
                src={Picture}
                alt="pic"
              ></ItemIconStyle>
              <ul>
                <li>
                  <p>{e.nome}</p>
                </li>
                <li>
                  <p>
                    <a href={mountLink(e)} target="_blank">
                      {e.number}
                    </a>
                  </p>
                </li>
                <li>
                  <p>{e.dia}</p>
                </li>
                <li>
                  <p>{e.hora}</p>
                </li>
                <li>
                  <p>{e.servico}</p>
                </li>
              </ul>
              <button>Finalizar</button>
              <ContentIconStyle>
                <img src={Edit} alt="pic"></img>
                <img src={Bin} alt="pic"></img>
              </ContentIconStyle>
            </ItemStyle>
          ))}
        </ListContentStyle>
      </ComponentStyle>
    </Fragment>
  );
}
export default UserComponent;
