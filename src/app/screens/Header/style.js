import Styled from "styled-components";
export const ContainerHeader = Styled.div`
  width:75%;
  padding:1%;
  display:flex;
  align-items:center;
  a{
    transform:translatey(25%);
    text-decoration:none;
    color:#fff;
    font-weight:bold;
    text-transform:uppercase;
    cursor:pointer;
    &:hover{
      transform:scale(1.01);
    }
  }
  
`;
export const ContainerMenu = Styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  width:25%;
`;
export const ContainerDropdown = Styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  padding:1%;
  margin-right:2%;
`;
export const HeaderStyle = Styled.div`
  position:fixed;
  background:#333;

  font-family:chilanka;
  display:flex;
  align-items:center;
  font-size:2vw;
  width:100%;
  letter-spacing:4px;
  @media screen and (max-width:768px) {
    &{
      font-size:2vw;
      letter-spacing:2px;
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
  width:2.5vw;
  cursor:pointer;
  &:hover{
    transform:scale(1.1);
    animation-name: balance;
    animation-duration: 1s;
    animation-iteration-count: 2;
  }
  @media screen and (max-width:768px) {
    &{
      visibility:hidden;
    }
  }  
`;

export const Container = Styled.div`
  font-size:1vw;
  letter-spacing:3px;
  font-family:chilanka, roboto;
  text-transform:uppercase;
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
  font-size:1vw;
  letter-spacing:3px;
  font-family:chilanka, roboto;
  text-transform:uppercase;
  div{
    display:flex;
    flex-direction:column;
    margin-right:7%;
    &:hover{
      transform:scale(1.15);
    }
    img{
      width:4vw;
      cursor:pointer;
      margin-bottom:1vw;
      
    }
    @media screen and (max-width:768px) {
      &{
        margin-right:15%;

    }
      }
    }
  }
  @media screen and (max-width:768px) {
    &{
      background:none;
      margin-right:50%;

    }
  }
`;
export const SairStyle = Styled.label`
  cursor:pointer;
  color:rgba(230,0,0,0.5);
  font-weight:700;
  &:hover{
    color:rgba(230,0,0,0.8);
  }
`;
export const LinkStyle = Styled.a`
  cursor:pointer;
  text-decoration:none;
  color:#fff;
  &:hover{
    color:#999;
  }
`;

export const ContentDropdown = Styled.div`
  button{
    border-radius:50%;
  }
`;

export const ContentLetter = Styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  transform:translatex(10%);
  @media screen and (max-width:768px){
    &{
      font-size:3vh;
    }
  }
`;
export const ContentAvatar = Styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  transform:translatex(10%);
  @media screen and (max-width:768px){
    .MuiAvatar-root{
      width:20px;
      height:20px;
    }
  }
`;
