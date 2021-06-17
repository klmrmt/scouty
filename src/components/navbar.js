import React, { Component, useEffect, setState } from 'react';

class Navbar extends Component {


  handleClick = (e) => {
    e.preventDefault();
    console.log('The link was clicked.');
  };

  render() {
    return (
        <div>
            <ul id='nav'>
                <li>
                    <a href="#" onClick={this.handleClick}>Log in</a>
                </li>
                <li>
                    <a href="#">Sign up</a>
                </li>
            </ul>
        </div>
    );
  }
}
export default Navbar;