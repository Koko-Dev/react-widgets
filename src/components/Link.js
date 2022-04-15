import React from "react";

const Link = ({ className, href, children }) => {
	const onClick = (event) => {
	//	Todo: Prevent a full page reload
		event.preventDefault();

	}
	return (
		<a
			href={href}
			className={className}
			onClick={onClick}>
			{children}
		</a>
	)
};

export default Link;