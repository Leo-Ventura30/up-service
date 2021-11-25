import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {DefaultTextField} from "../../../../ui/DefaultTextField"
import {DefaultButton} from "../../../../ui/DefaultButton";
import { Grid, Typography } from "@material-ui/core";
import styled from "styled-components";
import { Alert } from "@mui/material";

const GridItem = styled(Grid)`
  position:static;
  width:30%;
  min-height:30vw;
  max-height:35vw;
  display:flex;
  justify-content:center;
  align-items:center;
  background:#fff;
  border-radius: 1vw;
  padding:5vw;
  .text-field{
    margin-top:0.5vw;
    width:20vw;
  }
`
const CustomDivider = styled.div`
  position:static;
  width:10vw;   
  height:45vw;
  background:#ddd;
  clip-path: polygon(90% 0, 100% 0%, 10% 100%, 0 100%);
`

const CustomAlert = styled(Alert)`
  width:20vw;
`
export const HomeServicesContainer = ({configTextField})=>{

  const history = useHistory()
  
  const [userName, setUserName] = useState("")
  const [UserPassword, setUserPassword] = useState("")
  const [messageError, setMessageError] = useState("")


  const checkLogin = () => {
    if("leo"===userName&&"leo"===UserPassword){
      return history.push("/v2/dashboard")
    }
    setMessageError("Usuário ou senha invalidos, tente novamente!")
  }
  return(
    <>
      <Grid container direction="row" style={{minWidth:"95vw",width:"100%",height:"45vw", background:"#eee"}} justifyContent="space-evenly" alignItems="center">
        <GridItem container direction="column">
          <Typography children={"Acessar minha conta"} variant="h4"/>
          <Typography align="center" children={"Bem vindo de volta!"} variant="subtitle1"/>
          <Typography align="center" children={"Faça bom proveito da nossa plataforma."} variant="subtitle2"/>
          <br/>
          { messageError && <CustomAlert severity="error" children={messageError} />}
          <br/>
          <DefaultTextField className="text-field" labelText={configTextField.label.title="Login"} onChange={e=>setUserName(e.target.value)}/>
          <DefaultTextField className="text-field" labelText={configTextField.label.title="Senha"} onChange={e=>setUserPassword(e.target.value)}/>
          <br/>
          <br/>
          <DefaultButton width={"20vw"} padding={"4%"} children={"entrar"} onClick={checkLogin} />
        </GridItem>
        <CustomDivider orientation="vertical"/>
        <GridItem container direction="column">
          <Typography children={"Faça seu cadastro"} variant="h4"/>
          <Typography align="center" children={"Caso ainda não tenha uma conta, crie a sua agora e experimente a nossa plataforma gratuitamente!"} variant="subtitle2"/>
          <br/>
          <br/>
          {["Nome","CPF/CNPJ","Email","Senha"].map(title=>(
            <DefaultTextField className="text-field" key={title} labelText={configTextField.label.title=title}/>
          ))}
          <br/>
          <br/>
          <DefaultButton width={"20vw"} padding={"4%"} children={"criar conta"} />

        </GridItem>
      </Grid>
    </>
  )
}