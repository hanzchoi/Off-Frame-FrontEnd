import React, { Component } from 'react';
//import { connect } from 'react-redux';
import UserAdapter from '../adapters/UserAdapter';
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
import './LoginForm';

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log(this.state);
    UserAdapter.login(this.state)
    .then(data => {
      if(!data.error){
        //console.log(data);
        this.props.setUser(data)
        this.props.history.push('/cart')
        localStorage.setItem("token", data.user.user_id)
      }else{
        this.setState({error: data.error})
      }

    })
  }

  render() {
    const {username, password} = this.state
    return (
      <div className='login-form'>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>

            <Header as='h2' color='yellow' textAlign='center'>
              <Image src='https://res.cloudinary.com/dbgp0ijfb/image/upload/v1539701659/off-frame-logo/O.F.S.-LOGO.png' /> Log-in to your account
            </Header>

            <Form size='large' >
              <Segment stacked>
                <Form.Input
                  name="username"
                  value={username}
                  onChange={this.handleChange}
                  fluid icon='user'
                  iconPosition='left'
                  placeholder='Username'
                />
                <Form.Input
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                />

                <Button color='yellow' onClick={this.handleSubmit} size='large'>
                  Login
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>

    );
  }

}

export default LoginForm;
