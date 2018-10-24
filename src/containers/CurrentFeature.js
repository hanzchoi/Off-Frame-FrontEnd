import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';

class CurrentFeature extends Component {

  imageTesting = () => <Image src='https://res.cloudinary.com/dbgp0ijfb/image/upload/v1539701989/off-frame-coverpage/0.COVERPAGE-5-min.jpg' size='huge' centered/>

  render() {
    return(
      <div>
        <h1>This is the current Feature</h1>
        {this.imageTesting()}
      </div>
    )
  }
}

export default CurrentFeature;
