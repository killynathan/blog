import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';

import './App.css';
import NavbarContainer from './containers/NavbarContainer';
import MainContainer from './containers/MainContainer';
import NewPostPageContainer from './containers/NewPostPageContainer';

var testUser = {
	name: 'nate',
	blogPosts: [
		{
			title: 'cool',
			content: 'today is a good day. today is a good day. today is a good day. today is a good day. today is a good day. today is a good day. today is a good day. today is a good day. today is a good day. today is a good day. today is a good day. '
		},
		{
			title: 'second post',
			content: 'today is a bad day'
		},
		{
			title: 'first post!',
			content: 'what a wonderful day today is'
		},
		{
			title: 'first post!',
			content: 'what a wonderful day today is'
		},
		{
			title: 'first post!',
			content: 'what a wonderful day today is'
		}
	]
};

class App extends Component { 

  render() {
    return (
      <div className="App">
       
        <Router>
        	<div>
        		<NavbarContainer user={testUser}/>
        		<Route exact path='/' 
        			render={(renderProps) => (
        				<MainContainer user={testUser}/>
        			)}/>
	        	<Route path='/newPost' component={NewPostPageContainer}/>
	        </div>
      	</Router>
      </div>
    );
  }
}

export default App;
