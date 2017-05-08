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
import axios from 'axios';

var URL = 'http://localhost:8000';

function postUser() {
	fetch(URL + '/users', {
		method: 'POST',
		headers: {
            'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			username: 'nate',
			blogPosts: [
				{
					title: 'cool',
					body: 'today is a good day. today is a good day. today is a good day. today is a good day. today is a good day. today is a good day. today is a good day. today is a good day. today is a good day. today is a good day. today is a good day. '
				},
				{
					title: 'second post',
					body: 'today is a bad day'
				},
				{
					title: 'first post!',
					body: 'what a wonderful day today is'
				},
				{
					title: 'first post!',
					body: 'what a wonderful day today is'
				},
				{
					title: 'first post!',
					body: 'what a wonderful day today is'
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
		return fetch(URL + '/users/' + user)
			.then(resp => resp.json())
			.then(resp => {
				this.setState({
					user: resp.data
				});
				return resp.data
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
	        		<Route exact path='/' 
	        			render={(renderProps) => (
	        				<MainContainer user={this.state.user} dismissMenu={this.dismissMenu.bind(this)}/>
	        			)}/>
		        	<Route 
		        		path='/newPost' 
	        			render={(renderProps) => (
	        				<NewPostPageContainer submitPost={this.submitPost.bind(this)} Router={Router} dismissMenu={this.dismissMenu.bind(this)}/>
	        			)}/>
		        </div>
	      	</Router>
	      </div>
    )
  }
}

export default App;
