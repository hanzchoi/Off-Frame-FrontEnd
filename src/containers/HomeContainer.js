import React, { Component } from 'react';

//import NavHeader from './NavHeader';
import CurrentFeature from './CurrentFeature';
import AllProducts from './AllProducts';
//Button,Container,Divider,Visibility,Sidebar,Header,Icon,Image,List,Menu,Responsive,
import {
  Grid,
  Segment
} from 'semantic-ui-react'


class HomeContainer extends Component {
  render() {
    //console.log(this.props);
     return(
      <div>
        <h1>Home Container</h1>

        <Segment basic>
          <Grid verticalAlign='middle'>

            <Grid.Row >
              <Grid.Column width={16}>
                <CurrentFeature />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row >
              <Grid.Column width={16}>
                <AllProducts />
              </Grid.Column>
            </Grid.Row>

          </Grid>
        </Segment>
      </div>

     )
  }
}

export default HomeContainer;
