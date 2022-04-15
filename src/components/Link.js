import React from "react";

const Link = ({ className, href, children }) => {
	const onClick = (event) => {
	//	Todo: Prevent a full page reload
		event.preventDefault();

		// Goal:
		//  Change the URL without changing the content
		window.history.pushState({}, '', href);

		/*
		 Goal:  Detecting Navigation:
			 Produce and emit a navigation event that tells all of our different
			 Route Components that the URL has changed; To do so,
			 Emit an event every time user clicks on one of the Headings.
			 This Navigation event is going to be what tells
			  all of our different <Route />s that the URL has just changed.
			  Step: ... Listen for this newly dispatched 'popstate' event
			   from Route.js Route Component by setting up a route handler there.
		 */
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