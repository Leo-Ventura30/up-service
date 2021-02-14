import styled from "styled-components";

export const PopupContent = styled.div`
  width: 15%;
  min-height: 15%;
  max-height: max-content;
  padding: 2%;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  transform: translatey(100%);
  label {
    font-size: 12px;
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .cancel-button {
    background: #f33f4f;
    border: 2px solid #f33f4f;
    color: #fff;
    &:hover {
      border: 2px solid #f33f4f;
      background: #eee;
      color: #555;
    }
  }
  button {
    cursor: pointer;
    margin: 10%;
    border: none;
    border-radius: 10px;
    padding: 5%;
    border: 2px solid rgb(44, 152, 253);
    background: #eee;
    color: #000;
    &:hover {
      background: rgb(44, 152, 253);
      color: #fff;
    }
  }
`;
