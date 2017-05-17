import React, {Component} from 'react';
import LoginPage from '../components/LoginPage';
import '../css/LoginRegistration.css';
import {URL} from '../config/config';
import {login} from '../services/auth/auth';

class LoginPageContainer extends Component {
	constructor(props) {
		super(props);

		this.updateUsername = this.updateUsername.bind(this);
		this.updatePassword = this.updatePassword.bind(this);
		this.handleLogin = this.handleLogin.bind(this);

		this.setUser = this.props.setUser;

		this.state = {
			username: '',
			password: ''
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

	handleLogin(e) {
		e.preventDefault();
		var user = {
			email: this.state.username,
			password: this.state.password,
		};
		login(user).then((user) => {
			this.setUser(user);
		});
	}

	render() {
		return (
			<div>
			<LoginPage 
				username={this.state.username}
				password={this.state.password}
				handleUsernameChange={this.updateUsername}
				handlePasswordChange={this.updatePassword}
				handleLogin={this.handleLogin}/>
			</div>
		)
	}
}

export default LoginPageContainer;