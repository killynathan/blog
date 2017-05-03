import React, { Component } from 'react';
import BlogPostsPage from '../components/BlogPostsPage';

import '../css/Main.css';

class MainContainer extends Component {

	constructor(props) {
		super(props);

		this.state = {

		}
	}

	render() {
		const {user} = this.props;
		
		return (
			<div id='mainPage' className='page'>
				<BlogPostsPage blogPosts={user.blogPosts} />
			</div>
		)
	}
}

export default MainContainer