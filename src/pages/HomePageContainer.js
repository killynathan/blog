import React, { Component } from 'react';
import '../css/Main.css';
import HomePage from './HomePage'; 
import {getUsername} from '../services/auth/auth';
import {getBlogposts, deleteBlogpost} from '../services/data/data';

class HomePageContainer extends Component {

	constructor(props) {
		super(props);

		this.handleDeleteClick = this.handleDeleteClick.bind(this);

		this.state = {
			username: '',
			blogposts: [],
			finishedApiCall: false 
		};
	}

	componentDidMount() {
		let _username = getUsername();
		this.setState({username: _username});
		this.setBlogPosts(_username);
	}

	setBlogPosts(username) {
		getBlogposts(username).then((data) => {
			this.setState({blogposts: data.data, finishedApiCall: true});
		});
	}

	handleDeleteClick(id) {
		let confirmDelete = confirm('are you sure you want to delete this post?');
		if (confirmDelete) {
			deleteBlogpost(id)
			.then((data)=>{
				if (data.error) return alert(data.error);
				let newBlogposts = this.state.blogposts.filter((blogpost)=>{
					if (blogpost._id !== id) return blogpost;
				});
				this.setState({
					blogposts: newBlogposts
				});

			});
		}
	}

	render() {
		let username = this.state.username;
		let blogposts = this.state.blogposts;
		let onEditClick = this.onEditClick;
		return (
			<div>
				{this.state.finishedApiCall && 
					<div>
						{username ? (	
							<HomePage username={username} blogposts={blogposts} handleDeleteClick={this.handleDeleteClick}/>
						) : (
							<h1 style={{fontSize:100}}>Loading</h1>
						)}	
					</div>
				}
			</div>
		)
	}
}

export default HomePageContainer;