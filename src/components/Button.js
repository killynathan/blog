import React from 'react';
import {Link} from 'react-router-dom';

const Button = ({destination, content, handleClick}) => (
	<Link to={destination}><h4 onClick={handleClick}>{content}</h4></Link>
)

export default Button;