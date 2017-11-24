import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
//Component
class Header extends Component {
    render() {
         return (
            <header className = "header">
                <div className = "logo">LOGO</div>
                <nav>
                  <ul>
                    <li>
                        <Link to="/">Home</Link>

                    </li>
                    <li>
                      <Link to="/Produtcts">Produtcts</Link>

                    </li>
                    <li>
                      <Link to="/">Contact</Link>

                    </li>
                  </ul>
                </nav>
            </header>
          );
    }
}

export default Header;
