import Styled from "styled-components";

export const Fot = Styled.footer`
  margin-top:2px;
  position:relative;
  max-height:max-content;
  height:20%;
  font-family:roboto;
  font-size:1.4vw;
  color:#fff;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:3%;
  background:rgba(0,0,0,1);
  @media screen and (max-width:768px) {
    &{
      font-size:2.5vw;
    }
  }
`;
