import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../actions/index.js';
import { NavLink } from 'react-router-dom';
import { Segment, Grid, Image, List, Button, Header} from 'semantic-ui-react';
import Size from './Size';


class ProductDetails extends Component {

  productImage = (image) => {
    return <Image src={image} size='medium'/>
  }

  renderSize = (size) => {
    let arrSize = size.split(", ");
    return arrSize.map(measurement => <Size measurement={measurement}/>)
  }

  renderOutProductDetail = (product) => {
    if(product){
      const {name, images, price, color, size, description} = product

      return (
        <Segment basic>
          <Grid>
            <Grid.Row>
              <Grid.Column width={2}>
              </Grid.Column>

              <Grid.Column width={8}>
                <Header as='h2'>
                  {name}
                </Header>
                  {this.productImage(images[0].url)}
                <Header as='h2'>
                  {description}
                </Header>
              </Grid.Column>

              <Grid.Column width={4}>
                <Header as='h2'>
                  {`Price $${price}`}
                </Header>
                <Header as='h2'>
                  {`Color: ${color}`}
                </Header>
                <Header as='h2'>
                  Size:
                </Header>
                <List size="big">
                  {this.renderSize(size)}
                </List>
                <NavLink to={'/cart'}>
                  <Button
                    color="yellow"
                    fluid
                    onClick={() => {
                    return this.props.addProduct(this.props.product)}
                  }>Add to Cart</Button>
                </NavLink>
              </Grid.Column>

              <Grid.Column width={2}>
              </Grid.Column>
          </Grid.Row>
          </Grid>
        </Segment>
      )
    }
  }

  render(){
    return (
      <Fragment>
        {this.renderOutProductDetail(this.props.product)}
      </Fragment>
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
