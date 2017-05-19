import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';

class NavbarContainer extends Component {

	render() {
		return (
			<Navbar name='Lifebook' toggleMenu={this.props.toggleMenu} dismissMenu={this.props.dismissMenu}/>
		)
	}
}

export default NavbarContainer;