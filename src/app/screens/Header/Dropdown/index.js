import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "./Avatar";
import { SairStyle } from "../style";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:hover": {
      backgroundColor: theme.palette.secondary,
      color: theme.palette.secondary,
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("datas");
    history.push("/");
  };
  return (
    <div>
      <div onClick={handleClick}>
        <Avatar />
      </div>

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemText primary="Perfil" />
        </StyledMenuItem>
        <StyledMenuItem>
          <SairStyle onClick={handleLogout}>Sair</SairStyle>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
