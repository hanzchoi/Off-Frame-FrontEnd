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
    const {name, image, price, color, size, description} = this.currentProduct()

    return (
      <div>
        <h1>{name}</h1>
        {this.productImage(image)}
        <h1>{price}</h1>
        <h1>{color}</h1>
        <h1>}{size}</h1>
        <h1>{description}</h1>
        <NavLink to={'/cart'}>
          <button onClick={() => {
            return this.props.addProduct(this.props.selectedProduct)}
          }>Add to Cart</button>
        </NavLink>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps,{addProduct})(ProductDetails)
