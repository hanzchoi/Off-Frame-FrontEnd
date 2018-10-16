import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';


class Product extends Component {
  //{name, image, price} = this.props.product

  productImage = () => <Image src={this.props.product.image} size='small' centered/>

  render() {
    console.log(this.props);
    return(
      <div>
        {this.productImage()}
        <p>{this.props.product.name}</p>
        <p>{this.props.product.price}</p>
      </div>
    )
  }
}

export default Product
