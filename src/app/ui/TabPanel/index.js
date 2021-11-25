import React from "react";
import { Box, Paper, Typography } from "@material-ui/core/";
import { Stack } from "@mui/material";
import { NestedModal } from "../Modal";
export const TabPanel = (props) => {
  const { content, value, index, titlePanel, textBtn, textSubTitle, fields, handleFunction } = props;

  return (
    <div>
      {value === index && (
        <>
          <Box width={"90vw"} p={2}>
            <Paper
              style={{ padding: "2%" }}
              elevation={2}
              children={
                <>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    justifyContent="space-between"
                  >
                    <Stack justifyContent="center">
                      <Typography variant="h4" children={titlePanel} />
                      <Typography variant="caption" children={textSubTitle} />
                    </Stack>

                    <NestedModal textBtn={textBtn} dataTypes={fields} handleFunction={handleFunction} />
                  </Stack>
                </>
              }
            />
            <Paper elevation={2} children={content} />
          </Box>
        </>
      )}
    </div>
  );
};
