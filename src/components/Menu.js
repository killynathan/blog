import React from 'react';
import {Link} from 'react-router-dom';
import {isLoggedIn, logout, getUsername} from '../services/auth/auth';
import Button from '../components/Button';

const Menu = (props) => {

	const styles = {
		menu: {
			width: 160,
			paddingTop: 70,
			position: 'fixed',
			left: 0,
			backgroundColor: 'white',
			zIndex: 99,
			borderRight: 'solid 1px #DCDCDC',
			height: '100vh',
			fontSize: 18,
			fontFamily: 'Open Sans'
		},

		li: {
			paddingLeft: 33,
			marginTop: 12
		},

		hr: {
			marginTop: 20,
			marginBottom: 15,
			width: '20%',
			marginLeft: 33
		}
	};
	
	return (
		<div style={styles.menu}> 
			<ul>
				<li style={styles.li}><Link to='/'>Home</Link></li>
				<li style={styles.li}><Link to={'/u/' + getUsername()}>Profile</Link></li>
				<li style={styles.li}><Link to='/write'>Write</Link></li>
				<li style={styles.li}>Account</li>
				<li style={styles.li}>Timeline</li>
				
			</ul>
			<hr style={styles.hr}></hr>
			<ul>
				{!isLoggedIn() && <li style={styles.li}><Button destination='/login' content='Login'/></li>}
				{isLoggedIn() && <li style={styles.li}><Button destination='/' content='Logout' handleClick={logout}/></li>}
				{!isLoggedIn() && <li style={styles.li}><Button destination='/register' content='Signup'/></li>}
			</ul>
		</div>
	);
};

export default Menu;