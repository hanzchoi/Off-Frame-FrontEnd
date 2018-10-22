import React, { Component } from 'react';
import HomeContainer from './containers/HomeContainer'
import AllProducts from './containers/AllProducts'
import NavHeader from './containers/NavHeader'
import ProductDetails from './components/ProductDetails'
import ShoppingCart from './containers/ShoppingCart'
import CheckOutReview from './components/CheckOutReview'

//import './App.css';
import { Route, Switch} from 'react-router-dom'
import {Grid,Segment} from 'semantic-ui-react'

//<Route path='/' exact render={(props) => <HomeContainer {...props}/>}/>

class App extends Component {

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

          {//<Route component={}/> this is the default when there are no pages found
          //<Route path='/product/:id'/>
          }
        </Switch>
      </div>
    );
  }
}
export default App;
//<Route path='/products' render={this.props.history}

// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
//   <p>Hello</p>
// </header>
