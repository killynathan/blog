import React from 'react';
import {isLoggedIn, logout} from '../services/auth/auth';
import Button from './Button';

const Navbar = ({toggleMenu, dismissMenu}) => {

	const styles = {
		navbar: {
			height: 56,
			width: '100%',
			backgroundColor: 'white',
			color: 'black',
			borderBottom: 'solid 1px #DCDCDC',
			position: 'fixed',
			zIndex: '100',
			display: 'flex',
			alignItems: 'center',
			fontFamily: 'Open Sans'
		},
		verticalAlign: {
		},
		menuButton: {
			cursor: 'pointer',
			position: 'relative',
			left: 33,
			top: 2
		},
		name: {
			fontFamily: 'Courgette',
			fontSize: 23,
			position: 'relative',
			left: 50
		},
		ul: {
			marginLeft: 'auto',
			position: 'relative',
			right: 20
		},
		li: {
			display: 'inline-block',
			marginRight: 10
		}
	};

	return (
		<div style={styles.navbar} onClick={dismissMenu}> 
			<i className="fa fa-bars" style={{...styles.menuButton,...styles.verticalAlign}} aria-hidden="true" onClick={toggleMenu}></i>
			<h3 style={{...styles.name,...styles.verticalAlign}}>Lyfe</h3>
			{/*<ul style={{...styles.ul,...styles.verticalAlign}}>
				{!isLoggedIn() && <li style={{...styles.li,...styles.verticalAlign}}><Button destination='/login' content='Login'/></li>}
				{isLoggedIn() && <li style={{...styles.li,...styles.verticalAlign}}><Button destination='/' content='Logout' handleClick={logout}/></li>}
				{!isLoggedIn() && <li style={{...styles.li,...styles.verticalAlign}}><Button destination='/register' content='Signup'/></li>}
			</ul>*/}
		</div>
	);
}
 
export default Navbar; 