import React from "react";
import { Tabs, Tab, Divider } from "@material-ui/core/";
import styled from "styled-components";
import { TabPanel } from "../../../../ui/TabPanel";
import FullCalendarComponent from "../../../../components/FullCalendar";
import { TableItemsContent } from "../../../../ui/TableItems";
const TabsContainer = styled.div`
  background: #fff;
  display: flex;
  min-height: 80vw;
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
        children={<FullCalendarComponent />}
        value={initial_items[value]}
        index={initial_items[1]}
      />
      <TabPanel
        children={<TableItemsContent />}
        value={initial_items[value]}
        index={initial_items[0]}
      />
    </TabsContainer>
  );
};
