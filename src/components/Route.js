import {useEffect, useState} from "react";

const Route = ({path, children}) => {
	const [currentPath, setCurrentPath] = useState(window.location.pathname);

	useEffect(() => {
		const onLocationChange = () => {
			setCurrentPath(window.location.pathname);
		}

		// Listen for 'popstate' created and emitted from Link.js
		// when user clicks on a Header widget title.
		window.addEventListener('popstate', onLocationChange);

		// CLEANUP
		return () => {
			window.removeEventListener('popstate', onLocationChange);
		}

	}, [])
	return currentPath === path ? children : null;
}

export default Route;