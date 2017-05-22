import React from 'react';
import {Link} from 'react-router-dom';
import '../css/WelcomePage.css';

const WelcomePage = () => {
	const styles = {
		page: {
			paddingTop: 120,
			paddingBottom: 120,
			margin: '0px auto',
			width: 800,
			fontFamily: 'Open Sans'
		},
		name: {
			fontFamily: 'Lora',
			fontSize: 70,
			textAlign: 'center'
		},
		subName: {
			fontSize: 20,
			marginBottom: 100,
			textAlign: 'center'
		},
		button: {
			fontFamily: 'Lora',
			height: 30,
			width: 100,
			borderRadius: 5,
			marginBottom: 150,
			marginRight: 10,
			marginLeft: 10
		},
		title: {
			fontSize: 25
		},
		desc: {
			color: 'rgb(77, 77, 77)',
			marginBottom: 30
		}
	}

	return (	
		<div style={styles.page}>
			<h1 style={styles.name}>Lyfe</h1>
			<p style={styles.subName}>A story driven website</p>

			{/*<Link to='/login'><button style={styles.button}>Login</button></Link>
			<Link to='/register'><button style={styles.button}>Register</button></Link>*/}

			<p style={styles.title}>Write without distractions</p>

			<p style={styles.desc}>Lyfe is the perfect place to start your blog or diary. Simplicity is key, 
			so Lyfe eliminates all distractions to your writing.</p>

			<p style={styles.title}>Read the story of others without junk</p>
			<p style={styles.desc}>We place a strong emphasis on sharing. You can easily follow others and learn
			the lives of both strangers and your friends without the bloat of Youtube videos 
			and other annoyances</p>
			<p style={styles.title}>See things from a big perspective</p>
			<p style={styles.desc}>Lyfe allows you to zoom out and see your posts from a clear timeline view. With Lyfe, 
			you can clearly see the big moments.</p>
			<p style={styles.title}>Choose to share, not share, or share anonomously</p>
			<p style={styles.desc}>We provide all the options you want. It's your life, so you can share as much or as little 
			as you want.</p>

			<Link to='/'>Learn More</Link>
			
		</div>
	)
}

export default WelcomePage;