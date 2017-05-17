import React, { Component } from 'react';
import BlogPosts from '../components/BlogPosts';
import Profile from '../components/Profile';

import {URL} from '../config/config';

class ProfilePageContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: {
				profile: {},
				blogPosts: []
			}
		}

		const {renderProps} = this.props;
		const username = renderProps.match.params.username;
		this.getUser(username);
	}

	getUser(username) {
		fetch(URL + '/users/' + username + '/public')
			.then(resp => {
				return resp.json();
			})
			.then(resp => {
				if (resp.error) {
					this.setState({
						user: null
					});
				}
				else {
					this.setState({
						user: resp.data
					});
				}
			})
	}

	render() {
		let found = this.state.user;
		return (
			<div>
			{found ? (
				<div>
					<Profile profile={this.state.user.profile} />
					<BlogPosts blogPosts={this.state.user.blogPosts}/>
				</div>
			) : (
				<h1 style={{fontSize:60}}>USER NOT FOUND</h1>
			)}
			</div>
		);
	}
}

export default ProfilePageContainer;