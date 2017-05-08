import React, { Component } from 'react';
import NewPostPage from '../components/NewPostPage';

class NewPostPageContainer extends Component {

	constructor(props) {
		super(props);

		this.state = {
			postTitle: '',
			postBody: ''
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
		this.props.submitPost(post);
	}

	getTitleErrorMessage() {
		if (this.state.postTitle.length === 0) {
			return 'Need title!';
		}
		return '';
	}

	render() {
		return (
			<div className='page' onClick={this.props.dismissMenu}>
				<NewPostPage 
					postTitle={this.state.postTitle} postBody={this.state.postBody} 
					handleTitleChange={this.updateTitle.bind(this)} handleBodyChange={this.updateBody.bind(this)}
					handleSubmit={this.submitPost.bind(this)} titleErrorMessage={this.getTitleErrorMessage()}/>
			</div>
		)
	}
}

const pageStyle = {
	width: '500px',
	margin: '0 auto' 
}



export default NewPostPageContainer