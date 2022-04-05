import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
	const [term, setTerm] = useState('');
	const [results, setResults] = useState([]);

	useEffect(() => {
		//	 step: Method 1
		const search = async () => {
			const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
				params: {
					action: 'query',
					list: 'search',
					origin: '*',
					format: 'json',
					srsearch: term,
				},
			})

		/*	Todo:  Use data to update result piece of state
				Note: This will cause our component to rerender so that we
					   can then access the results array down inside of
					    our JSX block and render out our list */
			setResults(data);
		}
		search();

		//	step: Method 2 - IFFE
		// note: Only take this approach if easier to read
	/*	(async () => {
			await axios.get('asldkfj');
		})();*/

		//	 step: Method 3 - PROMISES
		/*axios.get('asldkfj')
			.then((response) => {
				console.log(response.data);
			})*/
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