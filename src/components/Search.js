import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
	const [term, setTerm] = useState('');

	console.log('I RUN WITH EVERY RENDER');

	useEffect(() => {
		// console.log('I run after every render and at initial render');
		// console.log('I run once')
		console.log('I just run');
	}, [term])

	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label htmlFor="">Enter Search Term</label>
					<input
						type="text"
						className="input"
						value={term}
						onChange={ (event) => setTerm(event.target.value)} />
					{/* /.input */}
				</div>
				{/* /.field */}
			</div>
			{/* /.ui form */}
		</div>
	)
}

export default Search;