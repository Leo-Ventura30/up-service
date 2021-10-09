import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const rows = [
  {
    id: 1,
    col0: "546514",
    col1: "Tosa bebe - Porte pequeno",
    col2: "Fixo",
    col3: "R$ 50,00",
    col4: "",
  },
  {
    id: 2,
    col0: "546515",
    col1: "Tosa bebe",
    col2: "Fixo",
    col3: "R$ 60,00",
    col4: "Porte pequeno",
  },
  {
    id: 3,
    col0: "546516",
    col1: "Tosa bebe",
    col2: "A partir",
    col3: "R$ 60,00",
    col4: "Porte pequeno R$60,00 Porte medio R$ 75,00 Porte grande R$ 90,00",
  },
];

const columns = [
  { field: "col0", headerName: "Num. Serviço", width: 150 },
  { field: "col1", headerName: "Serviço", width: 300, editable: true },
  { field: "col2", headerName: "Tipo de valor", width: 150, editable: true },
  { field: "col3", headerName: "Valor", width: 100, editable: true },
  { field: "col4", headerName: "Adicionais", width: 500, editable: true },
];

export const TableItemsContent = () => {
  return (
    <div style={{ height: "80vw", width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};
