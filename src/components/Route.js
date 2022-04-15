import { useState } from "react";

/*Note: Anytime we set up an event listener inside of a component,
    that's usually a sign that we need to define a useState() hook.*/

const Route = ({path, children}) => {
	return window.location.pathname === path ? children : null;
}

// goal: Set up an event

export default Route;