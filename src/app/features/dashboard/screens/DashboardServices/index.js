import React, { useState } from "react";
import { DashboardServicesContainer } from "../../containers/DashboardServices";
const INITIAL_ITEMS = ["Meu calendário", "Meus clientes" , "Faturamento", "Criar serviço", "Meus serviços", "Adicionar produto", "Estoque", "Adicionar funcionário", "Meus funcionários"]

export const DashboardServicesScreen = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return <DashboardServicesContainer value={value} initial_items={INITIAL_ITEMS} handleChange={handleChange} />
}