import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import { ContentLetter } from "../../style";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    textTransform: "uppercase",
    width: "50px",
    height: "50px",
  },
  hover: {},
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[900],
  },
}));

export default function LetterAvatars() {
  const classes = useStyles();
  const verifyDatas = () => {
    const firstlyLetterCommerce = localStorage.getItem("datas").substr(0, 2);
    return firstlyLetterCommerce;
  };
  return (
    <div className={classes.root}>
      <Avatar variant="circular" className={classes.purple}>
        <ContentLetter>{verifyDatas()}</ContentLetter>
      </Avatar>
    </div>
  );
}
