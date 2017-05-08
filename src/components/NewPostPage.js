import React from 'react';

const NewPostPage = ({postTitle, postBody, handleTitleChange, handleBodyChange, handleSubmit, titleErrorMessage}) => (
	<div>
		<form onSubmit={handleSubmit} style={formStyle}>
			<input value={postTitle} onChange={handleTitleChange} placeholder='Title' style={titleInputStyle}/>
			<p style={{display:'inline-block'}}>{titleErrorMessage}</p>
			<textarea value={postBody} onChange={handleBodyChange} style={bodyInputStyle}/>
			<button type='submit' >Submit</button>
		</form>
	</div>
)

const titleInputStyle = {
	display: 'inline-block',
	marginBottom: '50px'
}

const bodyInputStyle = {
	display: 'block',
	height: '200px',
	width: '100%'
}

const formStyle = {
	width: '500px',
	margin: '0 auto'
}

export default NewPostPage;