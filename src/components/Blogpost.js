import React from 'react';
import {Link} from 'react-router-dom';

const Blogpost = ({blogpost}) => {
	const styles = {
		blogPost: {
			marginBottom: 100,
			fontFamily: 'Lora',	
		},

		title: {
			fontFamily: 'Lora',
			fontSize: 50
		},

		body: {
			fontFamily: 'Open Sans',
			color: 'rgb(77, 77, 77)',
			fontSize: 20,
			marginTop: 30
		},

		author: {
			display: 'inline-block',
			fontSize: 17
		},

		date: {
			display: 'inline-block',
			float: 'right',
			fontSize: 17
		}
	};

	const date = new Date(blogpost.date);
	return (

		<div style={styles.blogPost}>
			<Link to={'/b/' + blogpost._id}><h1 style={styles.title}>{blogpost.title}</h1></Link>
			<p style={styles.author}>by: {blogpost.author}</p>
			<p style={styles.date}>{date.toDateString().substring(4)}</p>
			<p style={styles.body}>{blogpost.body}</p>
		</div>
	)
}

export default Blogpost; 