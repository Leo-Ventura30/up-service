import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline:0;
  }

  body{
    background: #ddd;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
  ul{
    list-style-type: none;
  }
  .show-popup{
    display: block !important;
  }
  .show {
    right: 5%;
    bottom: 0px;
    display: block !important;
  } 
`;

export default GlobalStyle;
