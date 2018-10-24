import React, { Component } from 'react';
import { Grid, Segment, Image } from 'semantic-ui-react'


class CurrentFeature extends Component {

  imageTesting = () => <Image src='https://res.cloudinary.com/dbgp0ijfb/image/upload/v1539701989/off-frame-coverpage/0.COVERPAGE-5-min.jpg' size='huge' centered/>

  render() {
    return(
      <Segment basic>
        <Grid verticalAlign='middle'>
        <h1>Current Feature</h1>
          <Grid.Row >
            <Grid.Column width={1}>
            </Grid.Column>

            <Grid.Column width={14}>
              {this.imageTesting()}
            </Grid.Column>

            <Grid.Column width={1}>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

export default CurrentFeature;
