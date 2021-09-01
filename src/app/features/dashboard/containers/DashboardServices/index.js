import React from "react";
import styled from 'styled-components'

import { Card, CardHeader, Avatar, CardContent, Typography } from "@material-ui/core"


const PageWrapper = styled.div`
    width:100vh;
    height:100vh;
`
const CardProduto = styled(Card)`
    width: 15vh;
`

export const DashboardServicesContainer = () =>
    <PageWrapper>
        <CardProduto>
            <CardHeader>
                <Avatar />
                Rita
            </CardHeader>
            <CardContent>
                dia xx
                hora xx:xx
                servico xxxxx x xxxx
                endereco: xxx xxxxx
                valor $xx,xx
            </CardContent>
        </CardProduto>
    </PageWrapper>