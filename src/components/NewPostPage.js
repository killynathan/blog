import React from 'react';

const NewPostPage = ({postTitle, postBody, handleTitleChange, handleBodyChange, handleSubmit}) => (
	<div>
		<form onSubmit={handleSubmit}>
			<input value={postTitle} onChange={handleTitleChange} placeholder='Title' style={titleInputStyle}/>
			<textarea value={postBody} onChange={handleBodyChange} style={bodyInputStyle}/>
			<button type='submit' >Submit</button>
		</form>
	</div>
)

const titleInputStyle = {
	display: 'block',
	marginBottom: '50px'
}

const bodyInputStyle = {
	display: 'block',
	height: '200px',
	width: '100%'
}

export default NewPostPage;