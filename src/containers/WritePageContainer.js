import React, { Component } from 'react';
import WritePage from '../components/WritePage';
import {Redirect} from 'react-router-dom';

class WritePageContainer extends Component {

	constructor(props) {
		super(props);

		this.updateUser = props.updateUser;

		this.state = {
			postTitle: '',
			postBody: '',
			successfulSubmit: false
		}
	}

	updateTitle(e) {
		const val = e.target.value;
		this.setState({
			postTitle: val
		});
	}

	updateBody(e) {
		const val = e.target.value;
		this.setState({
			postBody: val
		});
	}

	submitPost(e) {
		e.preventDefault();
		var post = {
			title: this.state.postTitle,
			body: this.state.postBody
		};
		this.props.user.blogPosts.unshift(post);	
		this.updateUser(this.props.user);
		this.setState({successfulSubmit: true});
	}

	getTitleErrorMessage() {
		if (this.state.postTitle.length === 0) {
			return 'Need title!';
		}
		return '';
	}

	render() {
		return (
			<div onClick={this.props.dismissMenu}>
				{this.state.successfulSubmit ? (
					<Redirect to='/'/>
				) : (
					<WritePage 
						postTitle={this.state.postTitle} postBody={this.state.postBody} 
						handleTitleChange={this.updateTitle.bind(this)} handleBodyChange={this.updateBody.bind(this)}
						handleSubmit={this.submitPost.bind(this)} titleErrorMessage={this.getTitleErrorMessage()}/>
				)}
			</div>
		)
	}
}

const pageStyle = {
	width: '500px',
	margin: '0 auto' 
}



export default WritePageContainer;