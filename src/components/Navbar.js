import React from 'react';
import '../css/Navbar.css';

const Navbar = ({handleMenuButtonClick}) => (
	// const {name, user} = this.props;
	<div className='Navbar'> 
		<i className="fa fa-bars menuButton" aria-hidden="true" onClick={handleMenuButtonClick}></i>
		<h3>Yourlife</h3>
	</div>
)

export default Navbar;