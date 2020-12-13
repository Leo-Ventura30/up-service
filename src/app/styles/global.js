import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline:0;
  }

  body{
    background: #CCCCCC;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
  ul{
    list-style-type: none;
  }
  .show {
    right: 5%;
    bottom: 0px;
    display: block !important;
  } 
`;

export default GlobalStyle;
