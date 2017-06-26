import React, { Component } from 'react';
import WritePage from './WritePage';
import {Redirect} from 'react-router-dom';
import {getUsername} from '../services/auth/auth';
import {submitBlogpost, getBlogpost, editBlogpost} from '../services/data/data';

class WritePageContainer extends Component {

	constructor(props) {
		super(props);

		this.username = getUsername();
		this.id = null;

		this.state = {
			postTitle: '',
			postBody: '',
			successfulSubmit: false
		}
	}

	componentDidMount() {
		this.id = this.props.renderProps.match.params.id;
		if (this.id) {
			getBlogpost(this.id)
			.then((resp)=>{
				if (resp.error) alert(resp.error);
				else {
					this.setState({
						postTitle: resp.data.title,
						postBody: resp.data.body
					});
				}
			});
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

	submit(e) {
		e.preventDefault();
		var post = {
			title: this.state.postTitle,
			body: this.state.postBody,
			author: this.username
		};
		if (!this.id) {
			submitBlogpost(post).then((resp)=>{
				this.setState({successfulSubmit: true});
			});
		}
		else {
			editBlogpost(this.id, post).then((resp)=>{
				if (resp.error) alert(resp.error);
				else {
					this.setState({successfulSubmit: true});
				}
			});
		}
		
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
						handleSubmit={this.submit.bind(this)} titleErrorMessage={this.getTitleErrorMessage()}/>
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