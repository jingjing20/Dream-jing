import React, { Component } from 'react';


class Header extends Component {
  handleClick() {
    console.log('click')
  }
  render() {
    return (
      <button onClick={this.handleClick}> header </button>
    )
  }
}
export default Header;