import React, { Component } from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import { Grid, Segment } from 'semantic-ui-react'
import './ProductsList.css';

class ProductsList extends Component {

  renderProducts = () => {
    return this.props.products.map((product) => <Product key={product.id} product={product}/>)
  }

  render() {

    return(
      <Segment basic>

        <Grid verticalAlign='middle'>
          <Grid.Row >
            <Grid.Column width={2}>
            </Grid.Column>

            <Grid.Column width={12}>
              <h2>Current Stock</h2>
              <div className="product-list">
                {this.renderProducts()}
              </div>
            </Grid.Column>

            <Grid.Column width={2}>
            </Grid.Column>
          </Grid.Row>

        </Grid>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(ProductsList);
