import React,{Component} from 'react';
import {getBlogpost} from '../services/data/data';
import BlogPostPage from './BlogPostPage';

class BlogPostPageContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			blogPost: null,
			message: null
		};

	}

	componentDidMount() {
		const {renderProps} = this.props;
		const id = renderProps.match.params.id;
		this.setBlogPost(id);
	}

	setBlogPost(id) {
		getBlogpost(id).then((data) => {
			if (!data.data) this.setState({message: data.message});
			else {
				this.setState({blogPost: data.data});
			}
		});
	}

	render() {
		return (
			<div>
				{
					this.state.message ? (
						<h1 style={{paddingTop:200}}>{this.state.message}</h1>
					) : (
						<div>
							{this.state.blogPost && <BlogPostPage blogPost={this.state.blogPost}/>}
						</div>
					)
				}
				
			</div>
		);
	}
}

export default BlogPostPageContainer;