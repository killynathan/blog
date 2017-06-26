import React from 'react';

const Profile = ({profile}) => {

	const styles = {
		profile: {
			height: '100vh',
			width: '100%',
			display: 'table'
		},

		profileElements: {
			textAlign: 'center',
			display: 'table-cell',
			verticalAlign: 'middle'
		},

		name: {
			fontFamily: 'Lora',
			fontWeight: 700,
			fontSize: 45
		},

		desc: {
			fontFamily: 'Lora',
			fontWeight: 400,
			fontSize: 25
		}
	};

	return (
		<div style={styles.profile}>
			<div style={styles.profileElements}>
				<h1 style={styles.name}>{profile.name}</h1>
				<p style={styles.desc}>{profile.description}</p>
			</div>
		</div>
	);
}

export default Profile;