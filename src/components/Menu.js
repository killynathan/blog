import React from 'react';
import {Link} from 'react-router-dom';
import '../css/Navbar.css';

const Menu = (props) => (
	// const {name, user} = this.props;
	<div id='menu'> 
		<ul>
			<li><Link to='/'>Home</Link></li>
			<li>Profile</li>
			<li><Link to='/newPost'>New Post</Link></li>
			<li>Account</li>
		</ul>
	</div>
)

export default Menu;