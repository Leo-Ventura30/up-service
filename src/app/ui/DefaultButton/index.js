import React from 'react';
import { Button } from '@material-ui/core';

export const DefaultButton = ({
  children, style, icon, width, padding, onClick,
}) => (
  <Button
    style={{ ...style, padding, width }}
    variant="contained"
    startIcon={icon}
    children={children}
    endIcon={icon}
    onClick={onClick}
  />
);
