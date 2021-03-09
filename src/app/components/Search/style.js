import Styled from "styled-components";
export const FormSearchStyle = Styled.form`
  .content-input{
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:10% 0 10% 0;
    input{
      width:80%;
      border:0;
      border-radius:10px;
      background:#eee;
      padding:5%;
      font-size:0.8vw;
      &:focus{
        border: 1px solid #FFA946;
      }
    }
  }
  .content-center{
    display:flex;
    justify-content:center;
    align-content:center;
  }
  .content-icons{
    width:100%;  
    .content-imgs{
      width:2vw;
    }
    .content-add{
      background:#FFA946;
      border-radius:10px;
      width:35%;
      margin-right:5%;
      padding:1%;
      cursor:pointer;
      &:hover{
        box-shadow: 1px 2px 7px #FFA946;
        cursor: pointer;
        background-color: #FFA946;
        transform: scale(1.05);
      }
    }
    .content-search{
      border:1px solid #FFA946;
      border-radius:10px;
      width:35%;
      margin-left:5%;
      padding:1%;
      cursor:pointer;
      &:hover{
        box-shadow: 1px 2px 7px #FFA946;
        cursor: pointer;
        transform: scale(1.05);
      }
    }
  }
  
`;
