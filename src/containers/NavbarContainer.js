import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';

class NavbarContainer extends Component {

	constructor(props) {
		super(props);

		this.state = {
			menuActive: false
		}
	}

	handleMenuButtonClick(x) {
		this.setState({menuActive: !this.state.menuActive});
	}

	render() {
		//const {user} = this.props;
		return (
			<div>
				<Navbar name='Lifebook' handleMenuButtonClick={this.handleMenuButtonClick.bind(this)}/>
				{this.state.menuActive && <Menu />}
			</div>
		)
	}
}

export default NavbarContainer