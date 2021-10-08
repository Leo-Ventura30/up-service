import React from "react";
import { Tabs, Tab, Divider } from "@material-ui/core/";
import styled from "styled-components";
import { TabPanel } from "../../../../ui/TabPanel";
import FullCalendarComponent from "../../../../ui/FullCalendar";
import { CardItemContent } from "../../../../ui/CardItems";
const TabsContainer = styled.div`
  background: #fff;
  display: flex;
  min-height: 100vh;
  .Tabs-navigation {
    border-right: 1px solid #aaa;
  }
  .PrivateTabIndicator-colorSecondary-3 {
    background-color: #16f;
  }
`;
export const DashboardServicesContainer = ({
  value,
  handleChange,
  initial_items,
}) => {
  return (
    <TabsContainer>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        className="Tabs-navigation"
      >
        {initial_items.map((item) => (
          <Tab label={item} />
        ))}
      </Tabs>
      <TabPanel
        style={{ width: "100vh" }}
        children={<FullCalendarComponent />}
        value={initial_items[value]}
        index={initial_items[0]}
      />
      <TabPanel
        children={<CardItemContent />}
        value={initial_items[value]}
        index={initial_items[1]}
      />
    </TabsContainer>
  );
};
