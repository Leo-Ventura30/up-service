import React, {Fragment} from 'react';
import Menu from './MenuController';
import Header from '../HeaderController';
import Body from '../BodyController'

const Home = ()=> (
  <Fragment>
    <Header />
    <Menu />
    <Body />
  </Fragment>
)
export default Home;