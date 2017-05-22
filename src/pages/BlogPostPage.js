import React from 'react';
import BlogPost from '../components/BlogPost';

const BlogPostPage = ({blogPost}) => {
	const styles = {
		page: {
			paddingTop: 100,
			width: 600,
			margin: '0 auto'
		}
	};

	return (
		<div style={styles.page}>
			<BlogPost blogPost={blogPost}/>
		</div>
	);
};

export default BlogPostPage;