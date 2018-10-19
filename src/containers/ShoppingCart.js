import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShoppingCartList from '../components/ShoppingCartList';
import CheckOutBox from '../components/CheckOutBox';

class ShoppingCart extends Component{

  // This will show you the total of the total price
  currentCartTotal = () => {
    let sum = 0;

    for (let value of this.props.currentCart) {
      sum += value.price;
    }
    return sum;
  }

  render() {
    console.log(this.currentCartTotal());
    return(
      <div>
        <ShoppingCartList cartItems={this.props.currentCart}/>
        <CheckOutBox/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentCart: state.currentCart
  }
}

export default connect(mapStateToProps)(ShoppingCart)
