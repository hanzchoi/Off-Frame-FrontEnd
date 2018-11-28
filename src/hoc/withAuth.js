import React from 'react';
import { Redirect } from 'react-router-dom';

const WithAuth = (Component) => {
  return class AuthComponent extends React.Component {
    render(){
      //'console.log(this.props);
      if (this.props.loggedIn){
        return <Component temp={this.props}/>
      } else if(localStorage.getItem('token')){
        return <div>...loading...</div>
      } else{
        return <Redirect to='/login' />
      }
    }
  }
}

export default WithAuth
