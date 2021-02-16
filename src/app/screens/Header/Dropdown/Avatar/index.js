import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange, deepPurple, orange } from "@material-ui/core/colors";
import { ContentLetter, ContentAvatar } from "../../style";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    textTransform: "uppercase",
    width: "50px",
    height: "10%",
  },
  hover: {
    color: orange,
  },
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
    let letterAvatar = Array(localStorage.getItem("datas"));
    let firstLetter = letterAvatar[0][0];
    let secondLetter = letterAvatar[0].split(" ");
    secondLetter = secondLetter[secondLetter.length - 1][0];
    let showLetters = firstLetter.concat(secondLetter);
    return showLetters;
  };
  return (
    <ContentAvatar className={classes.root}>
      <Avatar variant="circular" className={classes.purple}>
        <ContentLetter>{verifyDatas()}</ContentLetter>
      </Avatar>
    </ContentAvatar>
  );
}
