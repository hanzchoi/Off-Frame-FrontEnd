import React, { Component } from 'react';
import {Grid,Segment,Image} from 'semantic-ui-react';
import './App.css';
import { loadProducts } from './actions/index';
import { Route, Switch, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

import NavHeader from './containers/NavHeader';
import HomeContainer from './containers/HomeContainer';
import AllProducts from './containers/AllProducts';
import ShoppingCart from './containers/ShoppingCart';
import CheckOutReview from './components/CheckOutReview';
import ThankYouOrderPage from './components/ThankYouOrderPage';
import ProductDetails from './components/ProductDetails';
import LoginForm from './components/LoginForm';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: {},
      currentCart: []
    }
  }

  logout = () => {
    this.setState({
      currentUser: {},
      currentCart: []
    })
  }

  setUser = (userObj) => {
    this.setState({
      currentUser: userObj.user,
      currentCart: userObj.carts
    })
  }


  componentDidMount() {
    this.props.loadProducts()
  }

  render() {
    //const loggedIn = false
    const LOGO_URL = "https://res.cloudinary.com/dbgp0ijfb/image/upload/v1539701659/off-frame-logo/O.F.S.-LOGO.png"
    return (
      <div className="App">
        <Segment basic>
          <Grid verticalAlign='middle'>
            <Grid.Row >

              <Grid.Column width={2}>
                <Image src={LOGO_URL} size='small' verticalAlign='middle' />
              </Grid.Column>

              <Grid.Column width={14}>
                <NavHeader />
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
          <Route path='/login' exact render={() => <LoginForm />}/>
          <Route path='/signup' exact render={() => <h1>sign up</h1>}/>
          <Route path='/thank-you-order' exact render={() => <ThankYouOrderPage />}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect (null, {loadProducts})(App));
// <Grid.Row >
//   <Grid.Column width={3}>
//     <Image src={LOGO_URL} size='tiny' verticalAlign='middle' />
//   </Grid.Column>
//
//   <Grid.Column width={13}>
//     <LogSignHeader />
//   </Grid.Column>
// </Grid.Row>
