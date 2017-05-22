import React from 'react';
import '../css/Navbar.css';
import {isLoggedIn, logout} from '../services/auth/auth';
import Button from './Button';

const Navbar = ({toggleMenu, dismissMenu}) => (
	<div className='Navbar' onClick={dismissMenu}> 
		<i className="fa fa-bars menuButton" aria-hidden="true" onClick={toggleMenu}></i>
		<h3>Lyfe</h3>
		<ul id='auth'>
			{!isLoggedIn() && <li><Button destination='/login' content='Login'/></li>}
			{isLoggedIn() && <li><Button destination='/' content='Logout' handleClick={logout}/></li>}
			{!isLoggedIn() && <li><Button destination='/register' content='Signup'/></li>}
		</ul>
		
		
		
	</div>
)
 
export default Navbar; 