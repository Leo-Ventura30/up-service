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
    width:50px;
  }
  div{
    font-size:24px;
    font-weight: bold;
    text-transform:uppercase;
    padding-top:5%;
  }
  ul{
    font-size:20px;
    padding-top:5%;
    padding-bottom:20%;
    li{
      padding-top:1%;
    }
  }
  button{
    width:100%;
    height:30px;
    font-size:16px;
    color:#fff;
    font-weigth:bold;
    background:#2B9348;
    border:0;
    border-radius:5px;
    &:hover{
      transform:scale(1.1);
      background:#F94144;
      cursor:pointer;
    }
  }
`;