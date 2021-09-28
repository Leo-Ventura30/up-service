import React, { useState } from "react";

import { Box, Card, Typography, IconButton } from "@material-ui/core";
import { LocationOn, Edit, MonetizationOn, Work } from "@material-ui/icons";
import { grey } from "@material-ui/core/colors";
import { DefaultButton } from "../DefaultButton";

// import Switch from "@mui/material/Switch";

// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from "@material-ui/icons/MoreVert";

export const CardItemContent = () => {
  const [expanded, setExpanded] = useState(false);
  const [title, setTitle] = useState("Banho e Tosa");
  const [subHeader, setSubHeader] = useState("R$ 50,00");
  // title,subheader
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card variant="outlined">
      <Box
        sx={{
          minHeight: "12vw",
          minWidth: "12vw",
          height: "15vw",
          maxWidth: "15vw",
          p: 2,
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {/* <Avatar variant="rounded" src="avatar1.jpg" /> */}

        <Typography fontWeight={700}>
          <Work sx={{ color: grey[500] }} />
          Tosa na tesoura
        </Typography>
        <Typography fontWeight={700}>
          <MonetizationOn sx={{ color: grey[500] }} titleAccess="Valor" /> 15.00
        </Typography>
        <IconButton>
          <DefaultButton text={"Editar"} icon={<Edit />} />
        </IconButton>
      </Box>
    </Card>
  );
};
