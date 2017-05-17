import {URL} from '../../config/config';

var tokenName = 'mylife-token';

export const saveToken = (token) => {
	localStorage[tokenName] = token;
};

export const getToken = () => {
	return localStorage[tokenName];
};

export const isLoggedIn = () => {
	let token = getToken();

	if (token) {
		let payload = JSON.parse(atob(token.split('.')[1]));

		return payload.exp > Date.now() / 1000;
	}
	else {
		return false;
	}
};

export const getUsername = () => {
	if (isLoggedIn()) {
		let token = getToken();
		let payload = JSON.payload = JSON.parse(atob(token.split('.')[1]));
		return payload.username;
	}
	return null;
};

export const login = (user) => {
	return fetch(URL + '/login', {
		method: 'POST',
		headers: {
            'Content-Type': 'application/json'
		},
		body: JSON.stringify(user)
	})
	.then(resp => resp.json())
	.then(resp => {
		if (resp.error) {
			console.log(resp);
		}
		saveToken(resp.token);
		return resp.data;
	});
};

export const register = (user) => {

};

export const logout = () => {
	localStorage.removeItem(tokenName);
};