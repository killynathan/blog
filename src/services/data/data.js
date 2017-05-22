import {URL} from '../../config/config';


export function getBlogPost(id) {
	return fetch(URL + '/blogPosts/' + id)
	.then(resp => {
		console.log()
		return resp.json();
	})
};