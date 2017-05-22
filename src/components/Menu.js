import React from 'react';
import {Link} from 'react-router-dom';
import '../css/Navbar.css';

const Menu = (props) => (
	<div id='menu'> 
		<ul>
			<li><Link to='/'>Home</Link></li>
			<li>Profile</li>
			<li><Link to='/write'>Write</Link></li>
			<li>Account</li>
			<li>Timeline</li>
		</ul>
	</div>
)

export default Menu;