import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarContainer from './containers/NavbarContainer';
import MainContainer from './containers/MainContainer';

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
		}
	]
};

class App extends Component { 

  render() {
    return (
      <div className="App">
        <NavbarContainer user={testUser}/>
        <MainContainer user={testUser}/>
      </div>
    );
  }
}

export default App;
