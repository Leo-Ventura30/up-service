import React, { Fragment, Component } from "react";

import { ItemStyle, ContentIconStyle, ItemIconStyle } from "../../../style";

import mountLink from "../../../../../../services/zap";
import Picture from "../../../../../../assets/picture.svg";
import Edit from "../../../../../../assets/edit.svg";
import Bin from "../../../../../../assets/bin.svg";
import api from "../../../../../../services/api";
// class Items extends Component {
//   state = {
//     appointments: [],
//   };

//   render() {
//     return (
//       <Fragment>
//         {!this.state.appointments[0] && <h1>Não há agendamentos</h1>}
//         {this.state.appointments.map((e, k) => (
//           <ItemStyle key={k}>
//             <ItemIconStyle
//               className="person-pic"
//               src={Picture}
//               alt="pic"
//             ></ItemIconStyle>
//             <ul>
//               <li>
//                 <p>{e.nome}</p>
//               </li>
//               <li>
//                 <p>
//                   <a href={mountLink(e)} target="_blank">
//                     {e.number}
//                   </a>
//                 </p>
//               </li>
//               <li>
//                 <p>{e.dia}</p>
//               </li>
//               <li>
//                 <p>{e.hora}</p>
//               </li>
//               <li>
//                 <p>{e.servico}</p>
//               </li>
//             </ul>
//             <button>Finalizar</button>
//             <ContentIconStyle>
//               <img src={Edit} alt="pic"></img>
//               <img src={Bin} alt="pic"></img>
//             </ContentIconStyle>
//           </ItemStyle>
//         ))}
//       </Fragment>
//     );
//   }
// }

export default class extends Component {
  state = {
    appointments: [],
  };
  async componentDidMount() {
    const response = await api.get("/dashboard/appointments", {
      headers: { "x-access-token": localStorage.getItem("token") },
    });
    this.setState({ appointments: response.data.appointments });
    console.log(this.state.appointments[0]);
  }
  render() {
    return (
      <Fragment>
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
                <p>{e.date.split("T")[0]}</p>
              </li>
              <li>
                <p>{e.date.split("T")[1].split(".")[0]}</p>
              </li>
              <li>
                <p>{e.type}</p>
              </li>
            </ul>
            <button>Finalizar</button>
            <ContentIconStyle>
              <img src={Edit} alt="pic"></img>
              <img src={Bin} alt="pic"></img>
            </ContentIconStyle>
          </ItemStyle>
        ))}
      </Fragment>
    );
  }
}
