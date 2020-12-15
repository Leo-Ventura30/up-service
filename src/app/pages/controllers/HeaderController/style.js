import Styled from "styled-components";

export const HeaderStyle = Styled.div`
  background:rgba(0,0,0,0.2);
  font-family:roboto;
  display:flex;
  justify-content:center;
  font-size:6vw;
  width:100%;
  a{
    text-decoration:none;
    color:#000;
  }
  cursor:pointer;
  a:hover{
    transform:scale(1.05);
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
  width:6vw;
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
  font-family:roboto;
  background:#333;
  margin-bottom:3px;
  @media screen and (max-width:768px) {
    &{
      font-size:6vw;
    }
  }
`;
export const Content = Styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  margin:2%;
  background:#555;
  min-width:60%;
  max-width:max-content;
  border-radius:20px;
  @media screen and (max-width:768px) {
    &{
      background:none;
    }
  }
`;

export const SairStyle = Styled.label`
  cursor:pointer;
  &:hover{
    color:rgba(230,0,0,0.8);
  }
`;
export const LinkStyle = Styled.a`
  cursor:pointer;
  text-decoration:none;
  color:#fff;
  margin:2%;
  &:hover{
    color:#72f5f7;
    transform:scale(1.1);
  }
`;
