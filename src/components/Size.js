import React, { Component } from 'react';
import { List } from 'semantic-ui-react';

class Size extends Component {
  render() {
    return(
      <List.Item>{this.props.measurement}</List.Item>
    )
  }
}

export default Size;
