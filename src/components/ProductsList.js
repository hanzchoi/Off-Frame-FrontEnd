import React, { Component } from 'react';
import Product from './Product';
import { connect } from 'react-redux';

class ProductsList extends Component {

  renderProducts = () => {
    return this.props.products.map((product) => <Product key={product.id} product={product}/>)
  }

  render() {
    return(
      <div>
        {this.renderProducts()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(ProductsList);


//{this.renderProducts()}
