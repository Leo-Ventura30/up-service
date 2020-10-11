import Styled from 'styled-components'

export const Container = Styled.div`
  position:relative;
`;
export const Content = Styled.div`
  background:#9B9791;
  display:flex;
  flex-direction: column;
  align-items:center;
  width:100%;
`;
export const ContentImage = Styled.div`
  position:absolute;
  padding-top:1.5%;
`;

export const SairStyle = Styled.label`
  color:#b80D0D;
  cursor:pointer;
  opacity:0.7;
  &:hover{
    opacity:0.5;
  }
`
export const LinkStyle = Styled.a`
  font-weight: bold;
  color: rgb(0,0,0);
  padding: 0 20px 0 20px;
  font-size:28px;
  text-decoration:none;
  font-family: Arial, Helvetica, sans-serif;
  &:hover{
    color:#fff;
    border-radius:10px;
    transform:scale(1.2);
    background:#CBC8C3;
    padding:2%;
  }
`
export const NavStyle = Styled.nav`
  padding: 40px 20px 40px 20px;
  max-width: max-content;
  text-transform:uppercase;
`;