import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">

        </div>
        <nav>
          <ul>
            <li>
              <a href = '#'>Home</a>
            </li>
            <li>
              <a href = '#'>Education</a>
            </li>
            <li>
              <a href = '#'>Employment</a>
            </li>
            <li>
              <a href = '#'>Projects</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
