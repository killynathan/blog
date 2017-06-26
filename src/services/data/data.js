import {URL} from '../../config/config';

export function getBlogposts(username) {
	return fetch(URL + '/users/' + username + '/blogposts')
		.then(resp => {
			return resp.json();
		})
}

export function getBlogpost(id) {
	return fetch(URL + '/blogPosts/' + id)
	.then(resp => {
		return resp.json();
	})
};

export function deleteBlogpost(id) {
	return fetch(URL + '/blogposts/' + id, {
		method: 'DELETE'
	})
	.then(resp=> {
		return resp.json();
	});
};

export function submitBlogpost(blogpost) {
	return fetch(URL + '/blogposts', {
		method: 'POST',
		headers: {
            'Content-Type': 'application/json'
		},
		body: JSON.stringify(blogpost)
	})
	.then(resp=> {
		return resp.json();
	});
};

export function editBlogpost(id, blogpost) {
	return fetch(URL + '/blogposts/' + id, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(blogpost)
	})
	.then(resp=> {
		return resp.json();
	});
}
;