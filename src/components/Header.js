import React from 'react';
import Link from './Link';

const Header = () => {
	return (
		<div className="ui secondary pointing menu">
			<Link href="/"
			   className="item">Accordion</Link>
			{/* /.item */}
			<Link href="/list"
			   className="item">Search</Link>
			{/* /.item */}
			<Link href="/dropdown"
			   className="item">Dropdown</Link>
			{/* /.item */}
			<Link href="/translate"
			   className="item">Translate</Link>
			{/* /.item */}
		</div>
	)
}

export default Header;