import React from "react";
import { Tabs, Tab } from "@material-ui/core/";
import styled from "styled-components";
import { TabPanel, GridTable } from "../../../../ui";
import { FullCalendarComponent } from "../../../../components";

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
export const DashboardServicesContainer = ({
  dataTable,
  valueTab,
  handleChange,
  initialItems,
  textBtn,
  titlePanel,
  textSubTitle,
}) => {
  return (
    <TabsContainer>
      <Tabs
        indicatorColor="primary"
        orientation="vertical"
        variant="scrollable"
        value={valueTab}
        onChange={handleChange}
        className="Tabs-navigation"
      >
        {initialItems.map((item) => (
          <Tab label={item} key={item} />
        ))}
      </Tabs>
      <TabPanel
        content={<FullCalendarComponent />}
        value={initialItems[valueTab]}
        index={initialItems[0]}
        titlePanel={titlePanel[0]}
        textBtn={textBtn[0]}
        textSubTitle={textSubTitle[0]}
      />
      <TabPanel
        content={
          <GridTable
            // rows={dataTable.rows}
            columns={dataTable.columns_clients}
          />
        }
        value={initialItems[valueTab]}
        index={initialItems[1]}
        textBtn={textBtn[1]}
        titlePanel={titlePanel[1]}
        textSubTitle={textSubTitle[1]}
      />
      <TabPanel
        content={
          <GridTable rows={dataTable.rows_services} columns={dataTable.columns_billings} />
        }
        value={initialItems[valueTab]}
        index={initialItems[2]}
        textBtn={textBtn[2]}
        titlePanel={titlePanel[2]}
        textSubTitle={textSubTitle[2]}
      />
      <TabPanel
        content={
          <GridTable rows={dataTable.rows_services} columns={dataTable.columns_services} />
        }
        value={initialItems[valueTab]}
        index={initialItems[3]}
        textBtn={textBtn[3]}
        titlePanel={titlePanel[3]}
        textSubTitle={textSubTitle[3]}
      />
      <TabPanel
        content={
          <GridTable rows={dataTable.rows_services} columns={dataTable.columns_services} />
        }
        value={initialItems[valueTab]}
        index={initialItems[4]}
        textBtn={textBtn[4]}
        titlePanel={titlePanel[4]}
        textSubTitle={textSubTitle[4]}
      />
      <TabPanel
        content={
          <GridTable rows={dataTable.rows_services} columns={dataTable.columns_services} />
        }
        value={initialItems[valueTab]}
        index={initialItems[5]}
        textBtn={textBtn[5]}
        titlePanel={titlePanel[5]}
        textSubTitle={textSubTitle[5]}
      />
      <TabPanel
        content={
          <GridTable rows={dataTable.rows_services} columns={dataTable.columns_services} />
        }
        value={initialItems[valueTab]}
        index={initialItems[6]}
        textBtn={textBtn[6]}
        titlePanel={titlePanel[6]}
        textSubTitle={textSubTitle[6]}
      />
      <TabPanel
        content={
          <GridTable rows={dataTable.rows_services} columns={dataTable.columns_services} />
        }
        value={initialItems[valueTab]}
        index={initialItems[7]}
        textBtn={textBtn[7]}
        titlePanel={titlePanel[7]}
        textSubTitle={textSubTitle[7]}
      />
      <TabPanel
        content={
          <GridTable rows={dataTable.rows_services} columns={dataTable.columns_services} />
        }
        value={initialItems[valueTab]}
        index={initialItems[8]}
        textBtn={textBtn[8]}
        titlePanel={titlePanel[8]}
        textSubTitle={textSubTitle[8]}
      />
      <TabPanel
        content={
          <GridTable rows={dataTable.rows_services} columns={dataTable.columns_services} />
        }
        value={initialItems[valueTab]}
        index={initialItems[9]}
        textBtn={textBtn[9]}
        titlePanel={titlePanel[9]}
        textSubTitle={textSubTitle[9]}
      />
    </TabsContainer>
  );
};
