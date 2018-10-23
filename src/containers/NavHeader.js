import React, { Component } from "react";
import { Input, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

class NavHeader extends Component {
  state = { activeItem: "" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Menu secondary>
          <Menu.Item
            as={NavLink}
            to="/"
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={NavLink}
            to="/about"
            name="about"
            active={activeItem === "about"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={NavLink}
            to="/products"
            name="products"
            active={activeItem === "products"}
            onClick={this.handleItemClick}
          />

          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>

            <Menu.Item
              as={NavLink}
              to="/signup"
              name="Sign Up"
              active={activeItem === "Sign Up"}
              onClick={this.handleItemClick}
            />

            <Menu.Item
              as={NavLink}
              to="/login"
              name="Login"
              active={activeItem === "Login"}
              onClick={this.handleItemClick}
            />

            <Menu.Item
              as={NavLink}
              to="/cart"
              name="cart"
              icon="shopping cart"
              active={activeItem === "cart"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default NavHeader;

//

//
//
