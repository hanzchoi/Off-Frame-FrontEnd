import React, { Component } from 'react';
import { Button, Item } from 'semantic-ui-react'
import { deleteProduct } from '../actions/index.js'
import { connect } from 'react-redux';

class ShoppingCartItem extends Component {
  render() {
    //console.log(this.props.item);
    const {name, images, price } = this.props.item

    return(
      <Item>
        <Item.Image size='small' src={images[0].url} />

        <Item.Content verticalAlign='middle'>
          <Item.Header>{name}</Item.Header>
          <Item.Description>{`$${price}`}</Item.Description>
          <Item.Extra>
            <Button
              color="yellow"
              floated='right'
              onClick={() => {
                this.props.deleteProduct(this.props.item)
              }}>Remove</Button>
          </Item.Extra>
        </Item.Content>
      </Item>
    )
  }
}




export default connect(null,{deleteProduct})(ShoppingCartItem)
