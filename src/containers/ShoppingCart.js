import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShoppingCartList from '../components/ShoppingCartList';
import CheckOutBox from '../components/CheckOutBox';
import {Segment, Grid } from 'semantic-ui-react';


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
    //console.log(this.currentCartTotal());
    return(
      <Segment basic>
          <Grid>
            <Grid.Row >
              <Grid.Column width={11}>
                <ShoppingCartList cartItems={this.props.currentCart}/>
              </Grid.Column>
              <Grid.Column width={5}>
                <CheckOutBox totalPrice={this.currentCartTotal()}/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentCart: state.currentCart
  }
}

export default connect(mapStateToProps)(ShoppingCart)
