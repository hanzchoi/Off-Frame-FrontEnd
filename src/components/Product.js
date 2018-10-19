import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
//import { connect } from 'react-redux';
//import { selectProduct } from '../actions/index.js';
//import { Route } from 'react-router';
import {NavLink} from 'react-router-dom';


class Product extends Component {

  productImage = (image) => {
    return <Image src={image} size='small' centered/>
  }

  render() {
    const {name, image, price, id } = this.props.product
    return(
      <div>
        <NavLink to={`/products/${id}`}>
        {this.productImage(image)}
        <p>{name}</p>
        <p>{price}</p>
        </NavLink>

      </div>
    )
  }
}
//connect(null, {selectProduct})(
export default Product
// first is to get the state , second setter
// the second is where the store to component
