import React, { Component } from 'react';

import HomeContainer from './containers/HomeContainer';
import {Grid,Segment} from 'semantic-ui-react';

import AllProducts from './containers/AllProducts'
import NavHeader from './containers/NavHeader'
import ShoppingCart from './containers/ShoppingCart'
import CheckOutReview from './components/CheckOutReview'
import ThankYouOrderPage from './components/ThankYouOrderPage';
import { loadProducts } from './actions/index';
import { Route, Switch, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import ProductDetails from './components/ProductDetails'


//import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.loadProducts()
  }

  render() {
    return (
      <div className="App">
      <Segment basic>
        <Grid verticalAlign='middle'>
          <Grid.Row >
            <Grid.Column width={16}>
              <NavHeader {...this.props} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

        <Switch>
          <Route path='/' exact render={(props) => <HomeContainer/>}/>
          <Route path='/products' exact render={(props) => <AllProducts/>}/>
          <Route path='/products/:id' exact render={(props) => <ProductDetails {...props}/>}/>
          <Route path='/about' exact render={() => <h1>This is about</h1>}/>
          <Route path='/cart' exact render={() => <ShoppingCart />}/>
          <Route path='/checkout-review' exact render={() => <CheckOutReview />}/>
          <Route path='/login' exact render={() => <h1>This is a log in</h1>}/>
          <Route path='/signup' exact render={() => <h1>sign up</h1>}/>
          <Route path='/thank-you-order' exact render={() => <ThankYouOrderPage />}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect (null, {loadProducts})(App));
