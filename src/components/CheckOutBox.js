import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { setCurrentPrice } from '../actions/index'
import { connect } from 'react-redux'
import { Card, Button } from 'semantic-ui-react'


class CheckOutBox extends Component {

  render() {
    return(
      <Card>
        <Card.Content header={`Subtotal (${this.props.totalItems}): $${this.props.totalPrice}`} />
        <NavLink to='/checkout-review'>
          <Button color='yellow' fluid onClick={() => {
            return this.props.setCurrentPrice(this.props.totalPrice)
          }}>Check Out</Button>
        </NavLink>

      </Card>
    )
  }
}

export default connect(null, {setCurrentPrice})(CheckOutBox);
