import Styled from 'styled-components';
export const ComponentStyle = Styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  padding:2%;
`;
export const ListContentStyle = Styled.div`
  display:flex;
  flex-wrap: wrap;
  text-align:center;
  border-radius:10px;
  background:#78716D;
  width:98%;
  max-height:max-content;
  padding:4%;
`;
export const ItemStyle = Styled.div`
  padding:2%;
  border-radius:25px;
  font-family: 'Roboto', sans-serif;
  max-height:max-content;
  width: 19%;
  border: 6px double #fff4;
  background:#9B9791;
  margin:0.4%;
  margin-bottom:0.5%;
  &:nth-child(2n-1){
  background:#555;
  }
  img{
    padding-top:3%;
    width:50%;
  }
  div{
    font-weight:bold;
    font-size:20px;
    text-transform:uppercase;
    padding-top:5%;
  }
  ul{
    font-size:18px;
    padding-top:5%;
    padding-bottom:15%;
    li{
      padding-top:5%;
      border-bottom:1px solid #fff2;
      color:#fff9;
    }
  }
  button{
    font-weight:bold;
    width:100%;
    height:30px;
    font-size:16px;
    color:#fff;
    background:#2B9348;
    border:0;
    border-radius:20px;
    &:hover{
      transform:scale(1.1);
      background:#F94144;
      cursor:pointer;
    }
  }
`;
export const ContentIconStyle = Styled.div`
  img{
    margin:3px 20px 3px 20px;
    width:18%;
    &:hover{
      transform:scale(1.3);
      cursor:pointer;
    }
  }
`;