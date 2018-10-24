import React, { Component } from 'react';
import ShoppingCartItem from './ShoppingCartItem';
import { Item } from 'semantic-ui-react'


class ShoppingCartList extends Component {

  rednerShoppingCartItems = () => {
    return this.props.cartItems.map((item, i) => <ShoppingCartItem key={i} item={item}/>)
  }
  render() {
    return(
      <Item.Group relaxed>
        {this.rednerShoppingCartItems()}
      </Item.Group>
    )
  }
}

export default ShoppingCartList;
