import React from 'react';
import { NavLink } from 'react-router-dom';
import headerImage from './header.svg';

const Nav = (props) => (
  <header>
    <img src={headerImage} alt='rick and morty' style={{margin: '0 auto', display: 'flex', maxWidth: '500px'}}/>
    <div className='nav'>
      <li>
        <NavLink exact activeClassName='active' to='/'>
          Home
        </NavLink>
      </li>
      <div className='nav-links'>
        <li>
          <NavLink activeClassName='active' to='/characters'>
            Characters
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/locations'>
            Locations
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/episodes'>
            Episodes
          </NavLink>
        </li>
      </div>
    </div>
  </header>
)

export default Nav;
