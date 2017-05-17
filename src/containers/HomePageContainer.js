import React, { Component } from 'react';
import BlogPostsPage from '../components/BlogPosts';
import WelcomePage from '../components/WelcomePage';
import '../css/Main.css';

class HomePageContainer extends Component {

	constructor(props) {
		super(props);

		this.state = {

		}
	}

	render() {
		const {user} = this.props;
		let found = user;

		return (

			<div>
				{found ? (	
					<div className='page'>	
						<h1>Welcome {user.profile.name}!</h1>
					</div>
				) : (
					<div></div>
				)}	
			</div>
		)
	}
}

export default HomePageContainer;