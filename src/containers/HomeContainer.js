import React, { Component } from 'react';
import CurrentFeature from './CurrentFeature';
import AllProducts from './AllProducts';

import { Grid, Segment } from 'semantic-ui-react'



class HomeContainer extends Component {

  render() {
     return(
      <div>
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
