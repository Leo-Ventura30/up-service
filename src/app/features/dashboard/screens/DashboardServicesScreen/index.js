import React, { useState } from "react";
import { DashboardServicesContainer } from "../../containers/DashboardServicesContainer";

const INITIAL_ITEMS = [
  "Agenda",
  "Clientes",
  "Faturamento",
  "Funcionários",
  "Serviços",
  "Produtos",
  "Estoque",
  "Terceiros",
  "Fornecedores"
];

const dataTable = {

  rows_services : [
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
  ],

  columns_services :[
    { field: "col0", headerName: "Num. Serviço", width: 150 },
    { field: "col1", headerName: "Serviço", width: 300, editable: true },
    { field: "col2", headerName: "Tipo de valor", width: 150, editable: true },
    { field: "col3", headerName: "Valor", width: 100, editable: true },
    {
      field: "col4",
      headerName: "Informações adicionais",
      width: 500,
      editable: true,
    },
  ],

  columns_clients :[
    { field: "col0", headerName: "ID cliente", width: 150 },
    { field: "col1", headerName: "Nome", width: 250, editable: true },
    { field: "col2", headerName: "Cpf/Cnpj", width: 200, editable: true },
    { field: "col3", headerName: "Telefone", width: 200, editable: true },
    {
      field: "col4",
      headerName: "Informações adicionais",
      width: 400,
      editable: true,
    },
    {
      field: "col5",
      headerName: "Ultimas atualizações",
      width: 200,
      editable: true,
    },
    { field: "col6", headerName: "Data de criação", width: 200, editable: false },
  ],

  columns_billings : [
    { field: "col0", headerName: "Data", width: 150 },
    { field: "col1", headerName: "Receita", width: 250, editable: true },
    { field: "col2", headerName: "Despesas", width: 200, editable: true },
    { field: "col3", headerName: "Lucro/Prejuízo", width: 200, editable: true },
    { field: "col4", headerName: "Saldo acumulado", width: 200, editable: false },
  ],
}


const textBtn = ["Novo agendamento", "Adicionar cliente", "Inserir gasto/lucro", "Incluir funcionário","Novo serviço","Adicionar produto", "Criar lote","Adicionar terceiro","Incluir fornecedor"];
const titlePanel = ["Meus agendamentos", "Meus clientes", "Meu faturamento", "Meus funcionários","Meus serviços", "Meus produtos", "Meu estoque", "Serviços terceirizados","Meus fornecedores"];
const textSubTitle = [
  "Aqui estão listado todos os serviços concluidos e que serão realizados no futuro",
  "Aqui está listados todos os clientes que já compraram ou realizaram algum tipo de serviço na sua empresa",
  "Uma lista de todo seu controle financeiro de ganhos e gastos, pode ser marcado de forma automatica ou adicionar manualmente",
  "Aqui estão listados todos os seus funcionários, temporários e que prestaram serviços pra você anteriormente",
  "Uma lista de todos os serviços prestados por sua empresa",
  "Aqui estão listados todos os produtos vendidos ou fornecidos por sua empresa",
  "Esse é seu estoque, uma lista de todos produtos usados por sua empresa internamente, tenha tudo sob controle",
  "Aqui uma lista de todos os serviços de terceiros usado por sua empresa",
  "Uma lista de todos os seus fornecedores, tenha o controle total do seu estoque e produtos"
];

export const DashboardServicesScreen = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [name, setName] = useState("")
  const [numero, setNumber] = useState("")
  const [cpf, setCpf] = useState("")

  const fields = [setName, setNumber, setCpf]
  const handleLog = ()=>{
    console.log(name,numero,cpf)
  }
  return (
    <DashboardServicesContainer
      fields={fields}
      test={handleLog}
      dataTable={dataTable}
      valueTab={value}
      initialItems={INITIAL_ITEMS}
      handleChange={handleChange}
      textBtn={textBtn}
      titlePanel={titlePanel}
      textSubTitle={textSubTitle}
    />
  );
};
