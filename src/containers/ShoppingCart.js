import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShoppingCartList from '../components/ShoppingCartList';
import CheckOutBox from '../components/CheckOutBox';
import {Segment, Grid } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom'


class ShoppingCart extends Component{

  currentCartTotal = () => {
    let sum = 0;
    for (let value of this.props.currentCart) {
      sum += value.price;
    }
    return sum.toFixed(2);
  }

  render() {
    //console.log(this.props);
    return(
      this.props.loggedIn ?
        <Segment basic>
            <Grid>
              <Grid.Row >
                <Grid.Column width={2}>
                </Grid.Column>

                <Grid.Column width={7}>
                  <ShoppingCartList cartItems={this.props.currentCart}/>
                </Grid.Column>
                <Grid.Column width={2}>
                </Grid.Column>
                <Grid.Column width={3}>
                  <CheckOutBox totalPrice={this.currentCartTotal()} totalItems={this.props.currentCart.length}/>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          :
          <Redirect to='/login'/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentCart: state.currentCart
  }
}

export default connect(mapStateToProps)(ShoppingCart)
