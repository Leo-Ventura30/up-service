import Styled from "styled-components";

export const BarStyle = Styled.div` 
  position: fixed;
  display:flex;
  flex-direction:column;
  text-align: center; 
  width:max-content;
  background:#555;
  border-radius: 0 10px 10px 0;
  padding:13px;
`;
export const LinkBarStyle = Styled.img`
  opacity:0.8;

  height:50px;

  &:hover{
    cursor:pointer;
    transform:scale(1.2);
    opacity:0.3;
  }
  
`;
