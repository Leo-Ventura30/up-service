import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline:0;
  }
  #MuiBox-root,#MuiBox-root-6{
    width:100%;
  }
  body{
    background: #ddd;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
  ul{
    list-style-type: none;
  }
`;

export default GlobalStyle;
