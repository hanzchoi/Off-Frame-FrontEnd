import React, { Component } from 'react';
import HomeContainer from './containers/HomeContainer'
import AllProducts from './containers/AllProducts'
//import logo from './logo.svg';
//import './App.css';
import { Route, NavLink, Switch, Redirect} from 'react-router-dom'

class App extends Component {

  //
  render() {
    return (
      <div className="App">

        <Switch>
          <Route path='/' exact render={(props) => <HomeContainer {...props}/>}/>
          <Route path='/products' exact render={(props) => <AllProducts/>}/>
          {//<Route component={}/> this is the default when there are no pages found
          //<Route path='/product/:id'/>
          }

        </Switch>
      </div>
    );
  }
}
export default App;
// the home is the default
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
