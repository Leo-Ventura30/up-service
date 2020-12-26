import Styled from "styled-components";

export const ContentLogin = Styled.div`
  *{
    font-family:roboto;
  }
  min-height:45vw;
  max-height:max-content;
  width:100%;
  background:linear-gradient(to bottom right ,rgba(0,105,245,0.3),rgba(0,0,0,0.9));
`;

export const DivImage = Styled.div`
  position:fixed;
  width:100%;
`;
export const ContainerLogin = Styled.div`
  border-radius: 5% 0 0 5%;
  border-left:3px solid #1223;
  padding:3%;
  width:40%;
  min-height:97vh;
  max-height:max-content;
  background:rgba(0,0,0,0.5);
  transform:translateX(150%);
  display:flex;
  align-items:center;
  justify-content:center;
  @media screen and (max-width:768px) {
    &{
      border-radius:0%;
      width:100%;
      transform:translateX(0%);
    }
  }
  @media screen and (max-width:1000px) {
    &{
      border-radius:0%;
      width:100%;
      transform:translateX(0%);
    }
  }
  
`;

export const ImageContent = Styled.img`
  width:100%;
  height:50vw;
  opacity:0.4;

  @media screen and (max-width:1000px){
    height:0vh;
    width:0%;
    opacity:0;
  }
`;

export const Title = Styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
    font-size:3vw;
    color:#fff; 
    @media screen and (max-width:768px) {
        &{
            font-size:10vw;
        }
    }
    img{
        width:60px;
        max-width:80px;
        max-height:80px;
        @media screen and (max-width:768px) {
            &{
                width:50px;
            }
        }
    }
`;
export const Content = Styled.div`
    border-radius: 5px;
    border-left:3px solid #FF6B6B;
    border-bottom:3px solid #61B2D9;
    border-right:3px solid #FF6B6B;
    border-top:3px solid #61B2D9;
    padding:10%;
    background:rgba(255,255,255,0.1);   
    max-width:max-content;
    max-height:max-content;
    span{
        margin-bottom:10px;
        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:1.6vh;
        padding:4%;
        border-radius:10px;
        max-width:100%;
    }
    .error{
        color:#ff6166;
        background:rgba(255,107,107,0.5);
        border:1px solid #ff6166;
    }
    .success{
        color:#00dd00;
        background:rgba(0,200,0,0.5);
        border:1px solid #00dd00;
    }
    button{
        text-transform:uppercase;
        color:#000;
        margin-top:5%;
        font-size:1.5vw;
        width:100%;
        height:max-content;
        background:#61B2Df;
        padding:2%;
        border-radius:10px;
        border:0;
        cursor:pointer;
        &:hover{
            transform:scale(1.1);
        }
    }
    @media screen and (max-width:1100px) {
        &{
            button{
                margin-top:5%;
                font-size:2vw;
                width:100%;
                height:max-content;
                padding:5%;
                &:hover{
                    box-shadow:1px 1px 5px #31B2Df;
                    transform:scale(1);
                }
            }
        }
    }

    @media screen and (max-width:768px) {
        &{
            width:100%;
            height:max-content;
            padding:10% 5% 15% 5%;
            img{
                width:10vh;
            }
            button{
                margin-top:5%;
                font-size:4vw;
                width:100%;
                height:max-content;
                padding:4%;
                &:hover{
                    transform:scale(1);
                }
            }
            a{
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
                margin-top:5px;
            }
        }
    }
    .content-select{
        display:flex;
        flex-direction:row;
        #uf{
            margin-right:7.5px;
        }
        #municipio{
            margin-left:7.5px;
        }
        #uf,#municipio{
            border:0;
            background:#ddd;
            padding: 4% 2%;
            border-radius:10px;
            width:50%;
            margin-top:15px;
            font-size:1vw;
            color:#777;
            
            @media screen and (max-width:768px) {
                &{
                    margin-top:5px;
                    font-size:3vw;
                }
            }
        }
    }
    .content-input{
        display:flex;
        align-items:center;
        justify-content:center;
        margin-top:15px;
        background:#ddd;
        border-radius:10px;
        width:100%;
        input{
            color:#888;
            border:0;
            background:none;
            padding: 3% 2%;
            font-size:1.2vw;
            visibility:0;   
        }
        img{
            width:3vh;
            margin:5px;
        }
        @media screen and (max-width:1100px) {
            &{
              width:100%;
              input{
                padding:5% 2%;  
              }
              img{
                width:5vh;
                margin:3px;
              }
            }
        }
        @media screen and (max-width:768px) {
            &{  
                height:max-content;
                width:100%;
                margin-top:5px;
                input{
                    width:100%;
                    font-size:4vw;
                    background:none;
                }
                img{
                    width:30px;
                    margin:3px;
                }
            }
        }
    }
`;
export const ContentLink = Styled.div`
    margin-top:15%;
    max-height:10px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    a{  
        color:#61B2Df;
        text-decoration:none;
        border: 1px solid #61B2Df;
        border-radius: 5px;
        padding:2%;
        font-size:0.9vw;
        margin:5%;
        text-align:center;
        &:hover{
            box-shadow: 2px 2px 15px #61B2Df;
            background:#61B2Df;
            color:#fff;
        }
        @media screen and (max-width:1000px) {
            &{
                font-size:1.3vw;
                padding:1%;
                margin-top:15%;
            }
        }
        @media screen and (max-width:768px) {
            &{
                font-size:3vw;
            }
        }
    }
`;
