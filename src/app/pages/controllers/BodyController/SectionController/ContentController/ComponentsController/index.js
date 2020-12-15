import React, { Fragment } from "react";

import Picture from "../../../../../../assets/picture.svg";
import Edit from "../../../../../../assets/edit.svg";
import Bin from "../../../../../../assets/bin.svg";

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

              <strong>
                <p>{e.nome}</p>
              </strong>
              <strong>
                <p>{e.number}</p>
              </strong>
              <p>{e.dia}</p>
              <p>{e.hora}</p>
              <p>{e.servico}</p>
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
