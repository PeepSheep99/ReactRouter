import React from 'react'
import {Link} from 'react-router-dom';

const navStyle = {
  color: 'white'
}

function Nav() {
  return (
    <nav className='nav'>
        <h3>React <i class="fab fa-react"></i></h3>
        <ul className="nav-links">
            <Link style = {navStyle} to='/'><li>Home</li></Link>
            <Link style = {navStyle} to='/about'><li>About</li></Link>
            <Link style = {navStyle} to='/contact'><li>Contact</li></Link>
        </ul>
    </nav>
  );
}

export default Nav;
