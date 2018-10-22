import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';


class Product extends Component {

  productImage = (image) => {
    return <Image src={image} size='small' centered/>
  }

  render() {
    const {name, images, price, id } = this.props.product
    
    return(
      <div>
        <NavLink to={`/products/${id}`}>
          {this.productImage(images[0].url)}
          <p>{name}</p>
          <p>{price}</p>
        </NavLink>
      </div>
    )
  }
}

export default Product
// first is to get the state , second setter
// the second is where the store to component

//
