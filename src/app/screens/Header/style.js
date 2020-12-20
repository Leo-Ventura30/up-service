import Styled from "styled-components";

export const HeaderStyle = Styled.div`
  background:rgba(0,0,0,0.2);
  font-family:chilanka;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:7vw;
  width:100%;
  letter-spacing:10px;
  cursor:pointer;
  a{
    margin-top:10px;
    text-decoration:none;
    color:#000;
    margin-right:3%;
    margin-left:4%;
  }
  a:hover{
    transform:scale(1.05);
  }
  @media screen and (max-width:768px) {
    &{
      font-size:5vw;
      letter-spacing:5px;
    }
  }  
`;
export const ContentImageStyle = Styled.img`
  @keyframes balance{
    0%{
      transform:rotate(40deg);
    }
    20%{
      transform:rotate(-40deg);
    }
    40%{
      transform:rotate(40deg);
    }
    60%{
      transform:rotate(-40deg);
    }
    80%{
      transform:rotate(40deg);
    }
    100%{
      transform:rotate(0);
    }
  }
  width:5vw;
  cursor:pointer;
  &:hover{
    transform:scale(1.1);
    animation-name: balance;
    animation-duration: 1s;
    animation-iteration-count: 2;
  }
`;

export const Container = Styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:3vw;
  letter-spacing:3px;
  font-family:chilanka, roboto;
  text-transform:uppercase;
  background:#333;
  margin-bottom:0.1%;
  @media screen and (max-width:768px) {
    &{
      font-size:2vw;
    }
  }
`;
export const Content = Styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  margin:1%;
  div{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-right:7%;
    &:hover{
      transform:scale(1.15);
    }
    img{
      width:4vw;
      cursor:pointer;
      margin-bottom:1vw;
      @media screen and (max-width:768px) {
        &{
          width:5vw;
        }
      }
    }
    @media screen and (max-width:768px) {
      &{
        margin-right:10%;
      }
    }
  }
  @media screen and (max-width:768px) {
    &{
      background:none;
    }
  }
`;
export const SairStyle = Styled.label`
  cursor:pointer;
  color:rgba(230,0,0,0.5);
  &:hover{
    color:rgba(230,0,0,0.8);
  }
`;
export const LinkStyle = Styled.a`
  cursor:pointer;
  text-decoration:none;
  color:#fff;
`;
