import React from 'react';
import Blogpost from '../components/Blogpost';

const BlogPostPage = ({blogPost}) => {
	const styles = {
		page: {
			paddingTop: 100
		}
	};

	return (
		<div style={styles.page} className='pageWidth'>
			<Blogpost blogpost={blogPost}/>
		</div>
	);
};

export default BlogPostPage;