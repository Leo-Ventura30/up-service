import React from "react";
import { Button } from "@material-ui/core";

export const DefaultButton = ({ text, icon }) => {
  return (
    <Button variant="contained" endIcon={icon}>
      {text}
    </Button>
  );
};
