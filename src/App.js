import React, { Component } from 'react';
import {Grid,Segment,Image} from 'semantic-ui-react';
import './App.css';
import { loadProducts } from './actions/index';
import { Route, Switch, withRouter} from 'react-router-dom';
import UserAdapter from './adapters/UserAdapter'
import { connect } from 'react-redux';

import NavHeader from './containers/NavHeader';
import HomeContainer from './containers/HomeContainer';
import AllProducts from './containers/AllProducts';
import ShoppingCart from './containers/ShoppingCart';
import CheckOutReview from './components/CheckOutReview';
import ThankYouOrderPage from './components/ThankYouOrderPage';
import ProductDetails from './components/ProductDetails';
import LoginForm from './components/LoginForm';
import AboutPage from './containers/AboutPage';

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
      currentCart: userObj.shopping_carts
    })
  }


  componentDidMount() {
    this.props.loadProducts()
    if(localStorage.getItem("token")){
      UserAdapter.persist(localStorage.getItem("token"))
        .then(resp => {
          if(!resp.error){
            this.setUser(resp)
          } else {
            this.logout()
          }
        }
      )
    }
  }

  //Lets think about how we can save the loggin state in to redux
  render() {
    const loggedIn = !!this.state.currentUser.user_id
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
                <NavHeader loggedIn={loggedIn} logout={this.logout}/>
              </Grid.Column>

            </Grid.Row>

          </Grid>
        </Segment>

        <Switch>
          <Route path='/' exact render={() => <HomeContainer/>}/>
          <Route path='/products' exact render={() => <AllProducts/>}/>
          <Route path='/products/:id' exact render={(props) => <ProductDetails {...props}/>}/>
          <Route path='/about' exact render={() => <AboutPage />}/>
          <Route path='/cart' exact render={() => <ShoppingCart loggedIn={loggedIn}/>}/>
          <Route path='/checkout-review' exact render={() => <CheckOutReview />}/>
          <Route path='/login' exact render={(props) => <LoginForm setUser={this.setUser} {...props}/>}/>
          <Route path='/signup' exact render={() => <h1>sign up</h1>}/>
          <Route path='/thank-you-order' exact render={() => <ThankYouOrderPage />}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect (null, {loadProducts})(App));
