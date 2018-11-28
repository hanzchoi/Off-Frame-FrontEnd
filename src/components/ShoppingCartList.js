import React, { Component } from 'react';
import ShoppingCartItem from './ShoppingCartItem';
import { Item } from 'semantic-ui-react'
import WithAuth from '../hoc/withAuth';



class ShoppingCartList extends Component {

  rednerShoppingCartItems = () => {
    return this.props.temp.cartItems.map((item, i) => <ShoppingCartItem key={i} item={item}/>)
  }

  render() {
    //console.log(this.props);
    return(
      <Item.Group relaxed>
        {this.rednerShoppingCartItems()}
      </Item.Group>
    )
  }
}

export default WithAuth(ShoppingCartList);
