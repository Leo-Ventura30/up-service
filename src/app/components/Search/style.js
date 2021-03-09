import Styled from "styled-components";
export const FormSearchStyle = Styled.form`
  font-size:0.9vw;
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
      &:focus{
        border: 1px solid #FFA946;
      }
    }
  }
  .content-center{
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .content-icons{
    width:100%;  
    .content-imgs{
      width:2vw;
    }
    .content-add{
      border:1px solid #000;
      background:#000;
      border-radius:10px;
      width:35%;
      margin-right:5%;
      padding:1%;

      cursor:pointer;
      div{
        color:#fff;
      }
      &:hover{
        box-shadow: 1px 2px 7px #000;
        cursor: pointer;
        transform: scale(1.05);
      }
      &:active{
        box-shadow: 1px 2px 7px #666;
        transform: translateY(4px);
      }
    }
    .content-search{
      border:1px solid #000;
      border-radius:10px;
      width:35%;
      margin-left:5%;
      padding:1%;
      cursor:pointer;
      
      div{
        color:#000;

      }
      &:hover{
        box-shadow: 1px 2px 7px #000;
        cursor: pointer;
        transform: scale(1.05);
      }
      &:active{
        box-shadow: 1px 2px 7px #666;
        transform: translateY(4px);
      }
    }
  }
  
`;
