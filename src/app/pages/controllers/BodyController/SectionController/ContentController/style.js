import Styled from 'styled-components';

export const ContentStyle = Styled.div` 
  position:relative;
  margin:3% 3% 3% 3%;
  background:#9B9791;
  border-radius:10px;
  width:100%
  max-height:max-content;
`;
export const FormSearchStyle = Styled.form`
display:flex;
align-items:center;
padding:3% 1% 0 20%;
input{
  height:50px;

  font-size:24px;
  border:0px;
  padding-left:25px;
  border-radius: 50px 0 0 50px;
  max-height:max-content;
  width:60%;
}
button{
  background:white;
  border:0px;
  border-radius: 0 50px 50px 0;
  font-size:24px;
  height:50px;
  max-height:max-content;
  width:8%;
  cursor:pointer;
  &:hover{
    transform:scale(1.1);
    background:#7C7C7C;
    color:#fff;
  }
}
`;
export const ImageStyle = Styled.img`
  max-height:max-content;
  height:50px;
  margin:0;
`;