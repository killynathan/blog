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
		// this.props.user.blogPosts.append({
		// 	title: 'new post',
		// 	content: 'woot!'
		// });
		alert('sup');
	}

	render() {
		return (
			<div className='page' style={pageStyle}>
				<p>title in postPage:{this.state.postTitle}</p>
				<p>body in postPage: {this.state.postBody}</p>
				<NewPostPage postTitle={this.state.postTitle} postBody={this.state.postBody} 
					handleTitleChange={this.updateTitle.bind(this)} handleBodyChange={this.updateBody.bind(this)}
					handleSubmit={this.submitPost.bind(this)}/>
			</div>
		)
	}
}

const pageStyle = {
	width: '500px',
	margin: '0 auto'
}



export default NewPostPageContainer