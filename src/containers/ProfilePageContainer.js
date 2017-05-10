import React, { Component } from 'react';
import BlogPosts from '../components/BlogPosts';
import Profile from '../components/Profile';

class ProfilePageContainer extends Component {
	constructor(props) {
		super(props);

		this.URL = 'http://localhost:8000';

		this.state = {
			profile: {
				profile: {},
				blogPosts: []
			}
		}

		const {renderProps} = this.props;
		const username = renderProps.match.params.username;
		this.getUser(username);
	}

	getUser(username) {
		fetch(this.URL + '/users/' + username + '/public')
			.then(resp => {
				return resp.json();
			})
			.then(resp => {
				if (resp.error) {
					this.setState({
						profile: null
					});
				}
				else {
					this.setState({
						profile: resp.data
					});
				}
			})
	}

	render() {
		const found = this.state.profile;
		return (
			<div>
			{found ? (
				<div>
					<Profile profile={this.state.profile.profile} />
					<BlogPosts blogPosts={this.state.profile.blogPosts}/>
				</div>
			) : (
				<h1 style={{fontSize:60}}>USER NOT FOUND</h1>
			)}
			</div>
		);
	}
}

export default ProfilePageContainer;