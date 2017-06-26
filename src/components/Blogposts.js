import React from 'react';
import Blogpost from './Blogpost'

const BlogpostsPage = ({blogposts}) => {
	return (
		<div className='pageWidth'> 
			{blogposts.map((blogpost) => (
				<Blogpost blogpost={blogpost} />
			))}
		</div>
	);
}

export default BlogpostsPage; 