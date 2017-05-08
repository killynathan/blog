import React from 'react';

const BlogPost = ({blogPost}) => (
	<div className='blogPost'>
		<h1 className='blogPostTitle'>{blogPost.title}</h1> 
		<p className='blogPostBody'>{blogPost.body}</p>
	</div>
)

export default BlogPost;