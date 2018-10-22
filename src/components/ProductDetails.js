import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../actions/index.js';
import { Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class ProductDetails extends Component {

  productImage = (image) => {
    return <Image src={image} size='medium'/>
  }

  renderOutProductDetail = (product) => {
    if(product){
      const {name, images, price, color, size, description} = product
      console.log(product);

      return (
        <Fragment>
          <h1>{name}</h1>
            {this.productImage(images[0].url)}
            <h1>Price: {price}</h1>
            <h1>Color: {color}</h1>
            <h1>Size: {size}</h1>
            <h1>Description: {description}</h1>
            <NavLink to={'/cart'}>
              <button onClick={() => {
                return this.props.addProduct(this.props.product)}
              }>Add to Cart</button>
            </NavLink>
        </Fragment>
      )
    }
  }

  render(){
    //console.log(this.props.product);
    return (
      <div>
        {this.renderOutProductDetail(this.props.product)}
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
