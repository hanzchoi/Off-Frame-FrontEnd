import React, { Component } from 'react';
import ShoppingCartItem from './ShoppingCartItem'

class ShoppingCartList extends Component {

  rednerShoppingCartItems = () => {
    return this.props.cartItems.map((item) => <ShoppingCartItem key={item.id} item={item}/>)
  }
  render() {
    return(
      <div>
        {this.rednerShoppingCartItems()}
      </div>
    )
  }
}

export default ShoppingCartList;
