import Styled from 'styled-components'

export const HeaderTextStyle = Styled.div`
  padding-top:10px;
  background:#1A1916;
  font-family: 'Chilanka', cursive;
  opacity:0.9;
  height:120px;
  text-align:center;
  font-size:72px;
  color:white;
  div{
    background:black;
    &:hover{
      cursor:pointer;
      transform:scale(1.1);
      font-size:76px;
      color:#fffa;
    }
  }
`;
export const InitImageStyle = Styled.img`
  height:70px;
  &:hover{
    animation:balance 0.4s;
    cursor:pointer;
  }
`;
export const EndImageStyle = Styled.img`
  height:70px;
  &:hover{
    animation:balance 0.4s;
    cursor:pointer;
  }
`;
export const ImageStyle = Styled.label`
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
`;
