import React from "react";

const Link = ({ className, href, children }) => {
	const onClick = (event) => {
	//	Todo: Prevent a full page reload
		event.preventDefault();

		window.history.pushState({}, '', href);
		const navEvent = new PopStateEvent('popstate');
		window.dispatchEvent(navEvent);
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