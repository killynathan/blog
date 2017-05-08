import React from 'react';
import '../css/Navbar.css';

const NavBarStyle = {
	height: '45px',
	width: '100%',
	backgroundColor: 'white',
	color: 'black',
	borderBottom: 'solid 1px black',
	position: 'fixed',
	zIndex: 100
};

const Navbar = ({toggleMenu, dismissMenu}) => (
	<div className='Navbar' onClick={dismissMenu}> 
		<i className="fa fa-bars menuButton" aria-hidden="true" onClick={toggleMenu}></i>
		<h3>Yourlife</h3>
	</div>
)
 
export default Navbar; 