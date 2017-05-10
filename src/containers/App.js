import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import 'whatwg-fetch';

import '../css/App.css';
import NavbarContainer from '../containers/NavbarContainer';
import MainContainer from '../containers/MainContainer';
import NewPostPageContainer from '../containers/NewPostPageContainer';
import Menu from '../components/Menu';
import ProfilePageContainer from './ProfilePageContainer';
import LoginPageContainer from './LoginPageContainer';

var URL = 'http://localhost:8000';

function postUser() {
	console.log(JSON.stringify({
			username: 'bob',
			blogPosts: [
				{
					title: 'test!',
					body: 'test'
				}
			]
		}));
	fetch(URL + '/users', {
		method: 'POST',
		headers: {
            'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			username: 'bob',
			blogPosts: [
				{
					title: 'test!',
					body: 'test'
				}
			]
		})
	})
}

class App extends Component { 

	constructor(props) {
		super(props);


		this.state = {
			user: {
				username: '',
				blogPosts: []
			},
			menuActive: false
		}

		this.getUser('nate');
	}

	getUser(user) {
		fetch(URL + '/users/' + user)
			.then(resp => resp.json())
			.then(resp => {
				this.setState({
					user: resp.data
				});
				resp.data
			});
	}

	submitPost(post) {
		this.state.user.blogPosts.unshift(post);
		this.updateUser();
	}

	toggleMenu(e) {
		e.stopPropagation();
		this.setState({menuActive: !this.state.menuActive});
	}

	dismissMenu(e) {
		this.setState({menuActive: false});
	}

	updateUser() {
		fetch(URL + '/users/' + this.state.user.username, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(this.state.user)
		})
	}

  	render() {

    	return (
      		<div className="App">
       
       		<Router>
	        	<div>
	        		<NavbarContainer user={this.state.user} toggleMenu={this.toggleMenu.bind(this)} dismissMenu={this.dismissMenu.bind(this)}/>
	        		{this.state.menuActive && <Menu />}
	        		<div className='page'>
		        		<Route exact path='/' 
		        			render={(renderProps) => (
		        				<MainContainer user={this.state.user} dismissMenu={this.dismissMenu.bind(this)}/>
		        			)}/>
		        		<Route 
		        			path='/u/:username'
		        			render={(renderProps) => (
		        				<ProfilePageContainer renderProps={renderProps}/>
		        			)}/>
			        	<Route 
			        		path='/newPost' 
		        			render={(renderProps) => (
		        				<NewPostPageContainer submitPost={this.submitPost.bind(this)} Router={Router} dismissMenu={this.dismissMenu.bind(this)}/>
		        			)}/>
		        		<Route
		        			path='/login'
		        			render={(renderProps) => (
		        				<LoginPageContainer />
		        			)}/>
	        		</div>
		        </div>
	      	</Router>
	      </div>
    )
  }
}

export default App;
