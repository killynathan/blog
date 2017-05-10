import React from 'react';

const Profile = ({profile}) => (
	<div className='profile'>
		<div className='profileElements'>
			<h1 className='profileName'>{profile.name}</h1>
			<p className='profileDescription'>{profile.description}</p>
		</div>
	</div>
)

export default Profile;