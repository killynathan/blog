import React from 'react';

const RegisterPage = ({username, password, email, handleUsernameChange, 
						handlePasswordChange, handleEmailChange, register}) => {

	var days = [];
	for (var i = 1; i <= 31; i++) {
		days.push(i);
	}
	var years = [];
	var date = new Date();
	for (var j = date.getFullYear(); j >= 1900; j--) {
		years.push(j);
	}
	var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
	
	return (
		<div className='LRPage'>
			<div className='LRPageElements'>
				<form onSubmit={register}>
					<h1>Welcome</h1>
					<input type='text' required pattern='[a-zA-Z0-9_-]+' minLength='4' maxLength='20' placeholder='Username' value={username} onChange={handleUsernameChange}/>
					<input type='email' required maxLength='100' placeholder='Email' value={email} onChange={handleEmailChange}/>
					<input type='password' required minLength='5' maxLength='100' placeholder='Password' value={password} onChange={handlePasswordChange}/>
					{/*<select>
						<option>Year</option>
						{years.map((year) => (
							<option val={year}>{year}</option>
						))}
					</select>
					<select>
						<option>Month</option>
						{months.map((month,index) => (
							<option val={index}>{month}</option>
						))}
					</select>
					<select>
						<option>Day</option>
						{days.map((day) => (
							<option val={day}>{day}</option>
						))}
					</select>*/}
					
					<button type='submit' className='LRButton'>Register</button>
				</form>
			</div>
		</div>
	)
}

export default RegisterPage;