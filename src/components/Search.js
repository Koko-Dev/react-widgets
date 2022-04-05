import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
	const [term, setTerm] = useState('');

	useEffect(() => {
		//	 step: Method 1
		/*const search = async () => {
			await axios.get('asldkfj');
		}
		search();*/

		//	step: Method 2 - IFFE
		// note: Only take this approach if easier to read
	/*	(async () => {
			await axios.get('asldkfj');
		})();*/

		//	 step: Method 3 - PROMISES
		axios.get('asldkfj')
			.then((response) => {
				console.log(response.data);
			})
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