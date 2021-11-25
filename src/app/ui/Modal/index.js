import React, { useState } from "react";
import {Box, Grid} from "@mui/material";
import Modal from "@mui/material/Modal";
import { DefaultButton } from "../DefaultButton";
import { DefaultTextField } from "../DefaultTextField";
import { Typography } from "@material-ui/core";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background:"#fff",
  border: 0,
  boxShadow: 24,
  width: "60%", 
  height: "70%",
  borderRadius:"1vw"
};

function ChildModal({closeModal, handleLog}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid justifyContent="space-between" container >
        <DefaultButton width="20vw" padding="1vw" children={"Salvar"} onClick={handleOpen} />
        <DefaultButton width="20vw" padding="1vw" children={"Cancelar"} onClick={closeModal} />
      </Grid>
      <Modal hideBackdrop open={open} onClose={handleClose}>
        <Box sx={{ ...style, width:"15%", height:"15%", border:"1px solid #000", display:"flex",alignItems:"center" ,justifyContent:"center", flexWrap:"wrap" }} >
          <div>
            <Typography variant="caption" children="Deseja mesmo salvar as alterações?"/>
          </div>
          <div>
            <DefaultButton style={{marginRight:"0.5vw"}} onClick={handleLog} children={"Salvar"} />
            <DefaultButton style={{marginLeft:"0.5vw"}} onClick={handleClose} children={"Cancelar"} />
          </div>
        </Box>
      </Modal>
    </>
  );
}

export const NestedModal = ({ textBtn, dataTypes, handleFunction }) => {
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return ( 
    <>
      <DefaultButton children={textBtn} onClick={handleOpen} />
      <Modal open={open} onClose={handleClose}>
          <Grid alignItems="center" justifyContent="space-between" padding={10} container direction="row" sx={{ ...style}}>
              {["nome", "numero", "cpf/cnpj"].map((e,k)=>(
                <Grid item key={k}>
                  <DefaultTextField onChange={e=>dataTypes[k](e.target.value)} width="20vw" labelText={e} />
                </Grid>
              ))}
            <ChildModal handleLog={handleFunction } closeModal={handleClose} />
          </Grid>
      </Modal>
    </> 
  );
};
