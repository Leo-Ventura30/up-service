import React from "react";

import TextField from "@mui/material/TextField";

export const DefaultTextField = ({ defaultValue, width, labelText, className, onChange }) => {
  return <TextField style={{width:width}} className={className} defaultValue={defaultValue} label={labelText} onChange={onChange} />;
};
