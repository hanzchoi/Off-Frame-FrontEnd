import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { selectProduct } from '../actions/index.js';



class Product extends Component {

  selectProduct = () => {

  }

  productImage = (image) => {
    return <Image src={image}
              onClick={() => this.props.selectProduct(this.props.product)}
              size='small'
              centered/>
            }

  render() {
    //console.log(this.props);
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

export default connect(null, {selectProduct})(Product)
// first is to get the state , second setter
// the second is where the store to component
