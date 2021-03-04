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
  cursor:pointer;
  &:hover{
    background:#7C7C7C;
  }
  &:active{
    border:1px solid #31b2df;
  }
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

export const SpanEmpty = Styled.span`
  min-height:55vh;
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  color:#aaa;
  font-size:2vw;
`;
