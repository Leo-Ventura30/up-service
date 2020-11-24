import Styled from "styled-components";

export const Title = Styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
    font-size:3vw; 
    @media screen and (max-width:767px) {
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
    background:#fff;
    max-width:max-content;
    max-height:max-content;
    button{
        color:#000;
        margin-top:5%;
        font-size:2vw;
        width:100%;
        height:max-content;
        background:#C2EAF7;
        padding:2%;
        border:0;
        border-radius:10px;
        cursor:pointer;
        &:hover{
            background:#61B2Df;
            color:#fff;
        }
    }
    @media screen and (max-width:767px) {
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
            }
            a{
                font-size:4vw;
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
                margin-top:5px;
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
        }
        img{
            width:7vh;
        }
        @media screen and (max-width:1000px) {
            &{
              width:100%;
              input{
                padding: 5% 2%;  
              }
              img{
                  margin:1%;
              }
            }
        }
        @media screen and (max-width:767px) {
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
                    width:10vh;
                    padding:2%;
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
        font-size:1vw;
        margin:5%;
        &:hover{
            background:#61B2Df;
            color:#fff;
        }
    }
`;
