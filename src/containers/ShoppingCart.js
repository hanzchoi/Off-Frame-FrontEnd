import React, { Component } from 'react';
import { connect } from 'react-redux';


class ShoppingCart extends Component{
  render() {
    return(
      <div>
        <h1>This is the shopping cart 999page</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps)(ShoppingCart)
