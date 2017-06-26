import React from 'react';
import MiniBlogposts from '../components/MiniBlogposts';

const HomePage = ({username, blogposts, handleDeleteClick}) => {

	const styles = {
		page: {
			paddingTop: 100
		},

		welcome: {
			marginBottom: 80,
			fontFamily: 'Courgette',
			fontSize: 40,
			textAlign: 'center'
		},
	};

	return ( 
		<div className='pageWidth' style={styles.page}>
			<h1 style={styles.welcome}>Welcome {username}!</h1>
			<MiniBlogposts blogposts={blogposts} handleDeleteClick={handleDeleteClick}/>
		</div>
	)
};

export default HomePage;