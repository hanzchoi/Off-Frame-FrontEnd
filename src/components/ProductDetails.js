import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../actions/index.js';
import { Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class ProductDetails extends Component {

  currentProduct = () => {
    let id = parseInt(this.props.match.params.id, 10);
    let cProduct = this.props.products.find((product) => product.id === id)
    return cProduct;
  }

  productImage = (image) => {
    return <Image src={image} size='medium'/>
  }

  render(){
    const {name, image, price, color, size, description} = this.props.product
    return (
      <div>
        <h1>{name}</h1>
        {this.productImage(image)}
        <h1>Price: {price}</h1>
        <h1>Color: {color}</h1>
        <h1>Size: {size}</h1>
        <h1>Description: {description}</h1>
        <NavLink to={'/cart'}>
          <button onClick={() => {
            return this.props.addProduct(this.props.product)}
          }>Add to Cart</button>
        </NavLink>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.id)
  const product = state.products.find((product) => product.id === id)
  return {
    product: product
  }
}

export default connect(mapStateToProps,{addProduct})(ProductDetails)
