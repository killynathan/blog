import React from 'react';

const BlogPost = ({blogPost}) => (
	<div className='blogPost'>
		<h1>{blogPost.title}</h1> 
		<p>{blogPost.content}</p>
	</div>
)

export default BlogPost;