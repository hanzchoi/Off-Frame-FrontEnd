import React, { Component } from 'react';

import NavHeader from './NavHeader';
import CurrentFeature from './CurrentFeature';
import AllProducts from './AllProducts';

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'


class HomeContainer extends Component {
  render() {
     return(
      <div>
        <h1>Home Container</h1>
        <NavHeader />
        <CurrentFeature />
        <AllProducts />
      </div>

     )
  }
}

export default HomeContainer;
