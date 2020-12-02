import Styled from "styled-components";

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
        @media screen and (max-width:500px) {
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
        color:#ff6166;
        margin-bottom:10px;
        width:100%;
        background:rgba(255,107,107,0.5);
        border:1px solid #ff6166;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:1.6vh;
        padding:4%;
        border-radius:10px;
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
            font-size:1.1vw;
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
            border:0;
            background:none;
            padding: 3% 2%;
            font-size:1.5vw;
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
    margin-top:10%;
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
