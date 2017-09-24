import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,NavLink
} from 'react-router-dom';
import './Nav.css'

class Nav extends Component {
  render(){
    return(
    <ul className='nav'>
<li>
  <NavLink activeClassName='active' exact to='/'>
    Home
  </NavLink>
</li>
<li>
  <NavLink activeClassName='active' to='/itemlist'>
Itemlist
    </NavLink>
</li>

    </ul>
    );
  }
}

export default Nav
