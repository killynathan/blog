import React, { Component } from 'react';
import { createStore } from 'redux';

const counter = (state = 0, action) => {
	switch(action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
}

const store = createStore(counter);

const render = () => {
	document.body.innerText = store.getState();
}

store.subscribe(render);
render();

document.addEventListener('click', () => {
	store.dispatch({type: 'INCREMENT'});
});

class ReduxPract extends Component { 

  render() {
    return (
    	<div className='page'>
      		<p id='testing'> hi</p>
      	</div>
    );
  }
}

export default ReduxPract;