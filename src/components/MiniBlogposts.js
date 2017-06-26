import React from 'react';
import MiniBlogpost from './MiniBlogpost';

const MiniBlogposts = ({blogposts, handleDeleteClick}) => {
	return (
		<div>
			{
				blogposts.map((blogpost) => (
					<MiniBlogpost blogpost={blogpost} handleDeleteClick={handleDeleteClick}></MiniBlogpost>
				))
			}
		</div>
	)
};

export default MiniBlogposts;