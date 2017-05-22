import React from 'react';

const BlogPost = ({blogPost}) => {

	const styles = {
		blogPost: {
			marginBottom: 100,
			fontFamily: 'Lora'	
		},

		title: {
			fontFamily: 'Lora',
			marginBottom: 7,
			fontSize: 40
		},

		body: {
			fontFamily: 'Open Sans',
			color: 'rgb(77, 77, 77)',
			fontSize: 17,
			marginTop: 20
		},

		author: {
			display: 'inline-block'
		},

		date: {
			display: 'inline-block',
			float: 'right'
		}
	};

	const date = new Date(blogPost.date);
	return (

		<div style={styles.blogPost}>
			<h1 style={styles.title}>{blogPost.title}</h1>
			<p style={styles.author}>by: {blogPost.author}</p>
			<p style={styles.date}>{date.toDateString().substring(4)}</p>
			<p style={styles.body}>{blogPost.body}</p>
		</div>
	)
}

export default BlogPost; 