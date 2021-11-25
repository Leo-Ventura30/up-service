import React from "react";
import { DataGrid } from "@mui/x-data-grid";

export const GridTable = ({ rows, columns }) => {
  return (
    <div style={{ height: "80vw" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};
