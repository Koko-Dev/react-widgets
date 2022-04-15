import React from "react";

const Link = ({ className, href, children }) => {
	const onClick = (event) => {
	//	Todo: Prevent a full page reload
		event.preventDefault();

		// goal: Change the URL without changing the content
		window.history.pushState({}, '', href);

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