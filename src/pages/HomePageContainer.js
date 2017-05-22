import React, { Component } from 'react';
import '../css/Main.css';
import HomePage from './HomePage';

class HomePageContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			blogPosts: JSON.parse(JSON.stringify(props.user.blogPosts))
		};
	}


	render() {
		let user = this.props.user;
		return (
			<div>
				{user ? (	
					<HomePage user={user} />
				) : (
					<h1 style={{fontSize:100}}>Loading</h1>
				)}	
			</div>
		)
	}
}

export default HomePageContainer;