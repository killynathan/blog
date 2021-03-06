import React from 'react';
import autosize from  'autosize';
import {Link} from 'react-router-dom';

const WritePage = ({postTitle, postBody, handleTitleChange, handleBodyChange, handleSubmit, titleErrorMessage}) => {

	const styles = {

		page: {
			height: '100vh'
		},
		form: {
			paddingTop: 80
		},
		button: {
			float: 'right'
		},
		titleInput: {
			display: 'inline-block',
			width: '100%',
			paddingBottom: '10px',
			paddingTop: 10,
			fontFamily: 'Lora',
			fontWeight: 700,
			fontSize: 30,
			border: 'white',
			outline: 'none'
		},
		bodyInput: {
			display: 'block',
			width: '100%',
			fontFamily: 'Open Sans',
			fontSize: 25,
			outline: 'none',
			resize: 'none',
			border: 'white'
		}
	};

	autosize(document.getElementById('textarea'));

	return (
		<div style={styles.page} className='pageWidth'>
			<form onSubmit={handleSubmit} style={styles.form}>
				<button type='submit' style={styles.button}>Submit</button>
				<input value={postTitle} onChange={handleTitleChange} placeholder='Title' style={styles.titleInput}/>
				<textarea id='textarea' value={postBody} onChange={handleBodyChange} style={styles.bodyInput} placeholder='Body'/>
			</form>
		</div>
	)
}

export default WritePage;