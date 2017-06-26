import React, { Component } from 'react';
import Blogposts from '../components/Blogposts';
import Profile from '../components/Profile';

import {URL} from '../config/config'; 

class ProfilePageContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			profile: {},
			blogposts: [],
			finishedApiCall: false	
		}
	}

	componentDidMount() {
		const {renderProps} = this.props;
		const username = renderProps.match.params.username;
		this.getUser(username);
	}

	getUser(username) {
		fetch(URL + '/users/' + username)
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
						profile: resp.data.profile
					});
				}
			})

		fetch(URL + '/users/' + username + '/blogposts')
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
						blogposts: resp.data
					});
				}
				this.setState({finishedApiCall: true});
			})

	}

	render() {
		let found = this.state.profile !== null && this.state.blogposts;
		return (
			<div>
				{
					this.state.finishedApiCall && 
					<div>
						{found ? (
							<div>
								<Profile profile={this.state.profile} />
								<Blogposts blogposts={this.state.blogposts}/>
							</div>
						) : (
							<h1 style={{fontSize:60}}>USER NOT FOUND</h1>
						)}
					</div>
				}
			</div>
		);
	}
}

export default ProfilePageContainer;