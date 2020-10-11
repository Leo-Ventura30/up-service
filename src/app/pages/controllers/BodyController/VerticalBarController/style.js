import Styled from 'styled-components'

export const BarStyle = Styled.div` 
  position: fixed;
  display: block;
  text-align: center; 
  width:5%;
  background:#555;
  border-radius: 0 10px 10px 0;
  padding:13px;
`;
export const LinkBarStyle = Styled.img`
  opacity:0.8;
  max-width:100%;
  height:60px;

  &:hover{
    cursor:pointer;
    transform:scale(1.2);
    opacity:0.3;
  }
`;