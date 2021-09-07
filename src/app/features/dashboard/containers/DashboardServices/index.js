import React from "react";
import styled from 'styled-components'
import {VerticalTabs} from '../../../../ui/VerticalTab'
import { Card, CardHeader, Avatar, CardContent, Typography } from "@material-ui/core"


const PageWrapper = styled.div`
    height:100vh;
`

export const DashboardServicesContainer = () =>
    <PageWrapper>
        <VerticalTabs/>
    </PageWrapper>