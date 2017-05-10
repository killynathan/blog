import React from 'react';

const LoginPage = ({username, password, handleUsernameChange, handlePasswordChange, handleLogin}) => (
	<div className='LRPage'>
		<div className='LRPageElements'>
			<form onSubmit={handleLogin}>
				<h1>Welcome</h1>
				<input placeholder='Username/Email' value={username} onChange={handleUsernameChange}/>
				<input placeholder='Password' value={password} onChange={handlePasswordChange}/>
				<button type='submit' className='LRButton'>Login</button>
			</form>
		</div>
	</div>
)

export default LoginPage;