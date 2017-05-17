import React, {Component} from 'react';
import RegisterPage from '../components/RegisterPage';
import '../css/LoginRegistration.css';
import {URL} from '../config/config';

class RegisterPageContainer extends Component {
	constructor(props) {
		super(props);

		this.updateUsername = this.updateUsername.bind(this);
		this.updatePassword = this.updatePassword.bind(this);
		this.updateEmail = this.updateEmail.bind(this);
		this.register = this.register.bind(this);
		
		this.setUser = this.props.setUser;

		this.state = {
			username: '',
			password: '',
			email: '',
			birthdate: ''
		};

	}

	updateUsername(e) {
		const val = e.target.value;
		this.setState({
			username: val
		});
	}

	updatePassword(e) {
		const val = e.target.value;
		this.setState({
			password: val
		});
	}

	updateEmail(e) {
		const val = e.target.value;
		this.setState({
			email: val
		});
	}

	register(e) {
		e.preventDefault();
		var newUser = {
			username: this.state.username,
			password: this.state.password,
			email: this.state.email,
		}

		fetch(URL + '/register', {
			method: 'POST',
			headers: {
	            'Content-Type': 'application/json'
			},
			body: JSON.stringify(newUser)
		})
		.then(resp => resp.json())
		.then(resp => {
			if (resp.error) {
				alert('username exists');
			}
			this.setUser(resp.data);
		});
	}

	render() {
		return (
			<div>
			<RegisterPage 
				username={this.state.username}
				password={this.state.password}
				email={this.state.email}
				handleUsernameChange={this.updateUsername}
				handlePasswordChange={this.updatePassword}
				handleEmailChange={this.updateEmail}
				register={this.register}/>
			</div>

		)
	}
}

export default RegisterPageContainer;