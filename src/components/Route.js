import { useEffect } from "react";

/*Note: Anytime we set up an event listener inside of a component,
    that's usually a sign that we need to define a useEffect() hook.*/

const Route = ({path, children}) => {

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
			console.log('Location Change');
		}
		window.addEventListener('popstate', onLocationChange);

		// CLEANUP
		return () => {
			window.removeEventListener('popstate', onLocationChange);
		}

	}, [])
	return window.location.pathname === path ? children : null;
}

// goal: Set up an event

export default Route;