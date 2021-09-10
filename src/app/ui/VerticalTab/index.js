import React, { useState}from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styled from 'styled-components'
import { TabPanel } from '../TabPanel';
import FullCalendarComponent from '../FullCalendar'
const INITIAL_ITEMS = ["Meu calendário", "Meus clientes" , "Faturamento", "Criar serviço", "Meus serviços", "Adicionar produto", "Estoque", "Adicionar funcionário", "Meus funcionários"]

const TabsContainer = styled.div`
    background:#fff;
    display:flex;
    height:100vh;
    max-height:115vh;
    // max-width:45vh;
    // width:40vh;
    .Tabs-navigation{
        border-right: 1px solid #aaa
    }

` 
export const VerticalTabs= () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabsContainer >
        <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        className="Tabs-navigation"      
        >
            {/* <Tab label={INITIAL_ITEMS[0]}/>   
            <Tab label={INITIAL_ITEMS[1]} /> */}
             {INITIAL_ITEMS.map(item=><Tab label={item} />)}   
        </Tabs>
        {/* <TabPanel value={INITIAL_ITEMS[value]} index={INITIAL_ITEMS[0]}>
                {INITIAL_ITEMS[0]}...
        </TabPanel> */}
        <TabPanel value={INITIAL_ITEMS[value]} index={INITIAL_ITEMS[0]}>
            <FullCalendarComponent/>
        </TabPanel>
        <TabPanel value={INITIAL_ITEMS[value]} index={INITIAL_ITEMS[1]}>
            <FullCalendarComponent/>
        </TabPanel>
    </TabsContainer>
  );
}
