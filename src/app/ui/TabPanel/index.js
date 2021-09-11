import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


export const TabPanel= (props)=> {
  const { children, value, index, ...other } = props;

  return (
    <div>
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}