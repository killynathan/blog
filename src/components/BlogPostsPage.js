import React from 'react';
import BlogPost from './BlogPost'

const BlogPostsPage = ({blogPosts}) => (
	<div className='blogPosts'> 
		{blogPosts.map((blogPost) => (
			<BlogPost blogPost={blogPost} />
		))}
	</div>
)

export default BlogPostsPage; 