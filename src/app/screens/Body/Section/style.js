import Styled from "styled-components";

export const ContentStyle = Styled.div` 
  
`;

export const ComponentStyle = Styled.div`
  width:100%;
  padding:2%;
  @media screen and (max-width:768px){
    &{
      min-height:90vh;
      max-height:max-content;
    }
  }
`;
export const ListContentStyle = Styled.ul`
  display:flex;
  overflow: auto;
  flex-direction:row;
  flex-wrap: wrap;
  border-radius:20px;
  max-height:110vh;

  @media screen and (max-width:768px) {
    &{
      flex-direction:row;
      flex-wrap: wrap;
      justify-content:center;
      align-items:center;
    }
  }
`;
export const ContentHeader = Styled.div`
  background:red;
  margin-left:2%;
  padding-left:2%;
  font-size:1.5vw;
  font-weight:900;
`;
export const ItemStyle = Styled.li`
  margin:2%;
  border-radius:20px;
  background:#fff;
  width:20%;
  min-height:17vw;
  display:flex;
  flex-direction:column;
  padding:2%;
  color:#110439;
  font-weight:700;
  font-family:roboto;
  .item-header{
    display:flex;
    flex-direction:row;
  }
  .item-pic{
    width:40%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:5%;
  }
  .item-person{
    width:60%;
    display:flex;
    justify-content:center;
    flex-direction:column;
    p:nth-child(1){
      font-size:2vh;
    }
    a:nth-child(1){
      font-size:1.5vh;
      color:#999;
      text-decoration:none;
    }
  }
  .item-day{
    font-size:3vh;
    color:#333;
    margin-top:2%;
  }
  .item-info{
    display:flex;
    flex-wrap: wrap;
    justify-content:center;
    margin:5% 1% 0 1%;
    li{
      background:#eee;
      border-radius:5px;
      margin:3%;
      padding:5%;
    }
    p{
      text-align: center;
      font-size:2vh;
    }
  }
  .item-buttons{
    display:flex;
    justify-content:center;
    align-items:center;
    padding:2%;
    margin: 5% 0 5% 0;
    button{
      margin:2%;
      font-size:2vh;
      width:50%;
      padding:3%;
      border-radius:5px;
      border:0;
      font-family:arial;
      cursor:pointer;
      &:nth-child(1){
        background:#FFA946;
        color:#fff;
        &:hover{
          box-shadow: 1px 2px 7px #FFA946;
          cursor: pointer;
          transform: scale(1.05);
        }
        &:active{
          box-shadow: 1px 2px 7px #666;
          transform: translateY(4px);
        }
      }
      &:nth-child(2){
        border: 1px solid #FFA946;
        color:#FFA946;
        background:none;
        &:hover{
          box-shadow: 1px 2px 7px #FFA946;
          cursor: pointer;
          transform: scale(1.05);
        }
        &:active{
          box-shadow: 1px 2px 7px #666;
          transform: translateY(4px);
        }
      }
      
    }
  }

`;

export const ItemIconStyle = Styled.img`
  width:4vw;
  @media screen and (max-width:768px) {
    width:8vw;
  }
`;
export const ContentIconStyle = Styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  margin-top:8%;
  width:100%;
  img{
    cursor:pointer;
    margin:5%;
    width:3vw;
    border-radius:50px;
    padding:2%;
  }
  img:hover{
    transform:scale(1.2);
    background:rgba(255,255,255,0.1);
  }
  @media screen and (max-width:768px) {
    &{
      img{
        width:4vw;
      }
    }
  }
`;

export const ContentSearch = Styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  width:100%;
`;

export const PopupContentShow = Styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const SpanEmpty = Styled.span`
  min-height:55vh;
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  color:#aaa;
  font-size:2vw;
`;
