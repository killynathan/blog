import React from 'react';
import {Link} from 'react-router-dom';

const MiniBlogpost = ({blogpost, handleDeleteClick}) => {
	let date = (new Date(blogpost.date)).toDateString().substring(4);

	const styles={
		post: {
			fontFamily: 'Open Sans',
			marginBottom: 25
		},

		title: {
			display: 'inline-block',
			fontFamily: 'Lora'
		},

		date: {
			display: 'inline-block',
			fontSize: 18,
			marginRight: 10
		},
		edit: {
			display: 'inline-block',
			fontSize: 18,
			marginRight: 10
		},
		delete: {
			display: 'inline-block',
			fontSize: 18,
			cursor: 'pointer'
		}
	};

	let _handleDeleteClick = () => {
		handleDeleteClick(blogpost._id);
	}

	return (
		<div style={styles.post}>
			<Link to={'/b/'+ blogpost._id} style={styles.title}><h1>{blogpost.title}</h1></Link>
			<br></br>
			<p style={styles.date}>{date}</p>
			<Link to={'/write/' + blogpost._id} style={styles.edit}>edit</Link>
			<p style={styles.delete} onClick={_handleDeleteClick}>delete</p>
		</div>
	)
};

export default MiniBlogpost;
