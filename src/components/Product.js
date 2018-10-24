import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';
import './Product.css'

class Product extends Component {

  productImage = (image) => {
    return <Image src={image} size='medium' centered/>
  }

  render() {
    const {name, images, price, id } = this.props.product

    return(
      <div className="product">
        <NavLink to={`/products/${id}`}>
          {this.productImage(images[0].url)}
          <p>{name}</p>
        </NavLink>
      </div>
    )
  }
}

export default Product
// first is to get the state , second setter
// the second is where the store to component

//
