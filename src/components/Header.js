import React from 'react';

const Header = () => {
	return (
		<div className="ui secondary pointing menu">
			<a href="/"
			   className="item">Accordion</a>
			{/* /.item */}
			<a href="/list"
			   className="item">Search</a>
			{/* /.item */}
			<a href="/dropdown"
			   className="item">Dropdown</a>
			{/* /.item */}
			<a href="/translate"
			   className="item">Translate</a>
			{/* /.item */}
		</div>
	)
}

export default Header;