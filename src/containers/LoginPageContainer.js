import React, {Component} from 'react';
import LoginPage from '../components/LoginPage';
import '../css/LoginRegistration.css';

class LoginPageContainer extends Component {
	constructor(props) {
		super(props);

		this.updateUsername = this.updateUsername.bind(this);
		this.updatePassword = this.updatePassword.bind(this);
		this.login = this.login.bind(this);

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

	login(e) {
		e.preventDefault();
		var user = {
			username: this.state.username,
			password: this.state.password
		}
		console.log(user);
	}

	render() {
		return (
			<div>
			<LoginPage 
				username={this.state.username}
				password={this.state.password}
				handleUsernameChange={this.updateUsername}
				handlePasswordChange={this.updatePassword}
				handleLogin={this.login}/>
			</div>
		)
	}
}

export default LoginPageContainer;