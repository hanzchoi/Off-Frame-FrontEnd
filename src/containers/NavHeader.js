import React, { Component } from 'react';
import { Input, Menu } from 'semantic-ui-react';
import {NavLink} from 'react-router-dom'
class NavHeader extends Component {
  state = { activeItem: 'home'}
  //this.props.history.push(`/${name}`)
  handleItemClick = (event, { name }) => {
    this.setState({activeItem: name})
  }

  // TODO: The a tag is causing an error


  render() {
    const { activeItem } = this.state
    // <Link to="/item">Item</Link>
    // </Menu.Item>
    //console.log(this.props);
    return(
      <div>
        <Menu secondary>
          <NavLink to="/">
             <Menu.Item
                name='home'
                active={activeItem === 'home'}

                onClick={this.handleItemClick}
             />
           </NavLink>

           <NavLink to="/about">
             <Menu.Item
                name='about'
                active={activeItem === 'about'}
                onClick={this.handleItemClick}
             />
           </NavLink>

           <NavLink to="/products">
             <Menu.Item
                name='products'
                active={activeItem === 'products'}
                onClick={this.handleItemClick}
             />
           </NavLink>

          <Menu.Menu position='right'>
             <Menu.Item>
               <Input icon='search' placeholder='Search...' />
             </Menu.Item>

           <NavLink to="/cart">
             <Menu.Item
               name='cart'
               icon='shopping cart'
               active={activeItem === 'cart'}
               onClick={this.handleItemClick}
             />
           </NavLink>
         </Menu.Menu>
       </Menu>
     </div>
    )
  }
}

export default NavHeader
