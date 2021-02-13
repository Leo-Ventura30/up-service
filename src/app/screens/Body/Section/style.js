import Styled from "styled-components";

export const ContentStyle = Styled.div` 
  
`;
export const FormSearchStyle = Styled.form`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:row;
  margin:3%;
  width:40%;
  .input-form{
    width:100%;
    font-size:1vw;
  }
  .btn-search{
    border:0;
    background:none;
  }
  .send-search{
    border:0;
    height:3vw;
  }
`;
export const ImageStyle = Styled.img`
  background:#fff;
  border-radius: 0 50px 50px 0;
  width:5vw;
  &:hover{
    transform:scale(1.03);
    background:#7C7C7C;
    cursor:pointer;
  }
`;

export const AdduserStyle = Styled.img`
  background:#fff;
  border-radius: 50px 0 0 50px;
  width:5vw;
  &:hover{
    transform:scale(1.03);
    background:#7C7C7C;
    cursor:pointer;
  }
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
  background:rgba(0,0,0,0.3);
  border-radius:20px;
  padding:1%;
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
export const ItemStyle = Styled.li`
  display:flex;
  background:rgba(255,255,255,0.2);
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin:1%;  
  color:#fff;
  min-height:10vh;
  max-height:max-content;
  width:18%;
  text-align:center;
  padding:2%;
  border-radius:1000px;

  /* &:nth-child(2n+0){
    background:rgba(255,255,255,0.4);
    color:#000;
    a{
      color:#000;
    }
  } */
  *{
    margin-top:2%;
    font-size:1vw;
  }
  button{
    font-size:1vw;
    margin-top:20%;
    width:60%;
    padding:5%;
    border:0;
    border-radius:15px;
    cursor:pointer;
    background:rgba(0,255,0,0.6);
    letter-spacing:1px;
    font-family:roboto chilanka;
    font-weight:600;
    &:hover{
      background:rgba(255,0,0,0.6);
      box-shadow:1px 2px 7px rgb(255,0,0);
    }
  }
  ul{
    li{

      &:nth-child(1){
        font-weight:900;
      }
      p{
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        border-bottom:1px solid rgba(200,190,200,0.1);
        margin-top:7%;
        width:100%;
        font-size:1.2vw;
        letter-spacing:2px;
        padding:1%;
        a{
          font-size:1.3vw;
          text-decoration:none;
          color:#fff;
          &:hover{
            transform:scale(1.1);
            color:#72f5f7;
            opacity:0.7;
          }
        }
      }
    }
  }

  @media screen and (max-width:768px) {
    &{
      width:45%;
      max-height:max-content;
      min-height:30vh;
      border:0;
      padding:2%;
    }
    ul{
      li{
        p{
          margin-top:10%;
          border:0;
          margin:0;
          font-size:2vw;
          letter-spacing:3px;
          border-bottom:1px solid rgba(200,190,200,0.1);
          a{
            font-size:2vw;
          }
        }
      }
    }
    img{
      width:10vw;
    }
    button{
      margin-top:10%;
      padding:2%;
      font-size:2vw;
    }
  }
`;
export const InputStyle = Styled.input`
  width:100%;
  font-size:1vw;
  padding:2%;
`;
export const ItemIconStyle = Styled.img`
  width:5vw;
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
