import React from 'react';
import {Link} from 'react-router-dom';

const WelcomePage = () => (
	<div>
		<h1>Yourlife</h1>
		<h4>A story driven website</h4>

		<Link to='/login'><button>Login</button></Link>
		<Link to='/register'><button>Register</button></Link>

		<h3>Write with no distractions</h3>
		<h3>See things from a big perspective</h3>
		<h3>Choose to not share, share, or share anonomously</h3>
		<h3>Learn the story of others</h3>
	</div>
)

export default WelcomePage;