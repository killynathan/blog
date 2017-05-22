import React from 'react';

const HomePage = ({user}) => {

	const styles = {
		page: {
			paddingTop: 100
		}
	};

	return (
		<div style={styles.page}>
			<h1>Welcome {user.profile.name}!</h1>

		</div>
	)
};

export default HomePage;