import React from "react";
import { Tabs, Tab, Link } from "@material-ui/core/";
import styled from "styled-components";

const TabsContainer = styled.div`
  background: #eee;
  display: flex;
  min-height: 80vw;
  .Tabs-navigation {
    border-right: 1px solid #aaa;
    background-color: #eee;
  }
  .MuiTabs-vertical {
    background-color: #fff;
  }
  .MuiTabs-indicator {
    background-color: #16f;
  }
`;


export const TabContainer = ({menuItems, value, handleChange, TabPanel}) =>{

  return(
    <TabsContainer>
      <Tabs
          indicatorColor="primary"
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          className="Tabs-navigation"
        >
          {menuItems.map((item) => (
              <Tab value={"/"+item} label={item} key={item} />
          ))}
      </Tabs>
      <TabPanel/>
    </TabsContainer>
  )
}