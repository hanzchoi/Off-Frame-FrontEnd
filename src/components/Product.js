import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';


class Product extends Component {
  //{[name, image, price]} = this.props.product

  productImage = (image) => <Image src={image} size='small' centered/>

  render() {
    console.log(this.props);
    const {name, image, price } = this.props.product
    //console.log(this.props.product);
    return(
      <div>
        {this.productImage(image)}
        <p>{name}</p>
        <p>{price}</p>
      </div>
    )
  }
}

export default Product
