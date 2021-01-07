import Styled from "styled-components";
export const ContainerHeader = Styled.div`
  width:60%;
  padding:1%;
  display:flex;
  align-items:center;
  a{
    text-decoration:none;
    color:#000;
    font-weight:bold;
    cursor:pointer;
  }
  a:hover{
    transform:scale(1.05);
  }
`;
export const ContainerMenu = Styled.div`
  width:35%;
`;
export const ContainerDropdown = Styled.div`
  padding:1%;
`;
export const HeaderStyle = Styled.div`
  background:#bbb;
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
  font-weight:700;
  &:hover{
    color:rgba(230,0,0,0.8);
  }
`;
export const LinkStyle = Styled.a`
  cursor:pointer;
  text-decoration:none;
  color:#fff;
`;

export const ContentDropdown = Styled.div`
  button{
    border-radius:50%;
  }
`;
