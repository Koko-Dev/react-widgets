import { useState, useEffect } from "react";

/*Note: Anytime we set up an event listener inside of a component,
    that's usually a sign that we need to define a useEffect() hook.*/

const Route = ({path, children}) => {
	/*
	 Fixme: Route Components called in Header.js updates URL
	  on click but still does not display distinct URL content.
	 Solution Todo: Set up a piece of state whose sole purpose is to
	            force Route component to rerender itself.
	 */
	const [currentPath, setCurrentPath] = useState(window.location.pathname);

	/* Important: In useEffect():
	    Usually when we wire up an event handler we only want to call it,
	     or start listening only once. Because of this, make sure you pass
	     an empty array as useEffect's second argument.
         -- The empty array signifies that we only run that
         function when this component is first rendered to the screen.
	*/
	useEffect(() => {
		// Note: Define onLocationChange separately so that it is easy
		//  to remove on Cleanup.
		const onLocationChange = () => {
			// Note: When user clicks on one link, this console log
			//  will display four times because <Route /> has been
			//  called four times in Header.js
			setCurrentPath(window.location.pathname);
		}

		// Note: Listening for event created and emitted from Link.js
		window.addEventListener('popstate', onLocationChange);

		// CLEANUP
		return () => {
			window.removeEventListener('popstate', onLocationChange);
		}

	}, [])
	return currentPath === path ? children : null;
}

export default Route;