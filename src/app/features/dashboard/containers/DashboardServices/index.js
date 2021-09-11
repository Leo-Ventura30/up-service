import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styled from 'styled-components'
import { TabPanel } from '../../../../ui/TabPanel';
import FullCalendarComponent from '../../../../ui/FullCalendar'

const TabsContainer = styled.div`
    background:#fff;
    display:flex;
    height:100vh;
    max-height:115vh;
    .Tabs-navigation{
        border-right: 1px solid #aaa;
    }
    .PrivateTabIndicator-colorSecondary-3{
        background-color: #16f;
    }

` 
export const DashboardServicesContainer = ({value, handleChange, initial_items}) => {

  return (
    <TabsContainer >
        <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        className="Tabs-navigation"      
        >
             {initial_items.map(item=><Tab label={item} />)}   
        </Tabs>
          {/* {initial_items.map((item, key) => 
            <TabPanel children={<FullCalendarComponent/>} value={initial_items[key]}/>
          )} */}
        <TabPanel children={<FullCalendarComponent/>} value={initial_items[value]} index={initial_items[0]}/>
        
    </TabsContainer>
  );
}