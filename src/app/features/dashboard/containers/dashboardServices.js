import React from "react";
import styled from 'styled-components'

import { Card, CardHeader, Avatar, CardContent, Typography } from "@material-ui/core"

const PageWrapper = styled`
    width:100vh;
    height:100vh;
`

export const dashboardService = () =>
    <PageWrapper>
        <Card>
            <CardHeader>
                <Avatar />
                Rita
            </CardHeader>
            <CardContent>
                dia xx
                hora xx:xx
                servico xxxxx x xxxx
                endereco: xxx xxxxx
            </CardContent>
        </Card>
    </PageWrapper>