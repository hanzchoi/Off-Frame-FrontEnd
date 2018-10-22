import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class CheckOutBox extends Component {

  render() {
    console.log(this.props.totalPrice);
    return(
      <div>
        <h1>This is the Checkout Box</h1>
        <h1>total price for the current items in cart</h1>
        <h1>{this.props.totalPrice}</h1>
        <NavLink to='/checkout-review'>
          <button>Check Out</button>
        </NavLink>
      </div>
    )
  }
}

export default CheckOutBox;
