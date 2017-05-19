import React from 'react';
import '../css/Navbar.css';
import {isLoggedIn, logout} from '../services/auth/auth';
import NavButton from './NavButton';

const Navbar = ({toggleMenu, dismissMenu}) => (
	<div className='Navbar' onClick={dismissMenu}> 
		<i className="fa fa-bars menuButton" aria-hidden="true" onClick={toggleMenu}></i>
		<h3>Yourlife</h3>
		<ul id='auth'>
			{!isLoggedIn() && <li><NavButton destination='/login' content='Login'/></li>}
			{isLoggedIn() && <li><NavButton destination='/' content='Logout' handleClick={logout}/></li>}
			{!isLoggedIn() && <li><NavButton destination='/register' content='Signup'/></li>}
		</ul>
		
		
		
	</div>
)
 
export default Navbar; 