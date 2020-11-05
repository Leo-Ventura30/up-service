import Styled from "styled-components";

export const Title = Styled.div`
  display:flex;
  align-items:center;
  text-transform:uppercase;
  font-family: 'Chilanka', cursive;
  font-size:42px;
  font-weight:bold;
  max-width:max-content;
  max-height:max-content;
  margin-bottom:5%;
`;
export const Content = Styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:5%;
  background:rgba(0,150,255,0.3);
  border-radius:10px;
  top:8%;
  right:8%;
  height:max-content;
  border:3px outset rgba(230,230,230,0.5);
  position:absolute;
  form{
    height:max-content;
    width:100%;
    display:flex;
    background:rgba(5,5,5,0.4);
    border-radius:10px;
    input{
      font-family:roboto;
      font-size:14px;
      color:rgb(55,55,55);
      padding-left:2%;
      margin-top:5%;
      height:35px;
      width:90%;
      border-radius:5px;
      &:focus{
        border:2px solid rgba(0,120,255,0.9);
      }
    }
    button{
      font-family:roboto;
      font-size:20px;
      min-height:max-content;
      width:90%;
      margin-top:15%;
      height:max-content;
      padding:3%;
      text-transform:uppercase;
      border:0;
      border-radius:3px;
      background:rgba(0,120,255,0.9);
      cursor:pointer;
      &:hover{
        color:#fff;
        background:rgba(0,200,255,0.9);
      }
    }
    div{
      width:100%;
      display:flex;
      flex-direction:column;  
      align-items:center;
      margin-top:10%;
    }
  }
  
`;
export const ContentLink = Styled.div`
  margin-bottom:6%;
  a{
    min-height:5px;
    margin-bottom:6%;
    text-decoration:none;
    color:#fff;
    &:hover{
      color:#888;
    }
}
`;
