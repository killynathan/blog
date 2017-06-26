import React from 'react';
import {Link} from 'react-router-dom';

const Button = ({destination, content, handleClick}) => (
	<Link to={destination}><p onClick={handleClick}>{content}</p></Link>
)

export default Button;