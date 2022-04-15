import React from "react";

const Link = ({ className, href, children }) => {
	const onClick = (event) => {
		/*
		 Fixme: Control/Command click does not open a new window
		  with corresponding link; restore this feature.

		  Todo: If Mac Command Key or Windows Control Key is clicked,
		   return early and do not prevent default or create or emit
		   popstate event; allow the browser to just do its normal
		   thing -- to open up a new tab and navigate to the href
		   on this link. */
		if (event.metaKey || event.ctrlKey) return;

		 // Todo: Prevent a full page reload
		event.preventDefault();

		/*
		 Todo: When Header link clicked, create and emit popstate event;
			 in Route.js, event listener will listen for this event and set
			 window.location.pathname (setCurrentPath) to clicked URL
			 assigned to href prop value, i.e. <Route href='/dropdown' /> ;
			 selected header will display children (widget).
		 */
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