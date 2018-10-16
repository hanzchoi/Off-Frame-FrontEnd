import React, { Component } from 'react';
import { Input, Menu } from 'semantic-ui-react';

class NavHeader extends Component {
  state = { activeItem: 'home'}

  handleItemClick = (event, { name }) => this.setState({activeItem: name})

  render() {
    const { activeItem } = this.state

    return(
      <div>
      <Menu secondary>
       <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
       />
       <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
       />
       <Menu.Item
          name='products'
          active={activeItem === 'products'}
          onClick={this.handleItemClick}
       />
       <Menu.Menu position='right'>
         <Menu.Item>
           <Input icon='search' placeholder='Search...' />
         </Menu.Item>
         <Menu.Item
           name='cart'
           icon='shopping cart'
           active={activeItem === 'cart'}
           onClick={this.handleItemClick}
         />
       </Menu.Menu>
     </Menu>
     </div>
    )
  }
}

export default NavHeader
