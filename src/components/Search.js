import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
	const [term, setTerm] = useState('programming');
	const [results, setResults] = useState([]);


	// note: The only thing useEffect allows to
	//  be returned is another function
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

			setResults(data.query.search);
		}

		const timeoutId = setTimeout(() => {
			if (term) {
				search();
			}
		}, 500);

		return () =>  {
			clearTimeout(timeoutId);
		}

	}, [term])

	// Todo: Map through the list of results
	const renderedResults = results.map((result) => {
		const regex = /(<([^>]+)>)/gi;
		const cleanSnippet = result.snippet.replace(regex, '');
		return (
			<div key={result.pageid} className="item">
				<div className="right floated content">
					<a href={`https://en.wikipedia.org/?curid=${result.pageid}`}
					   target="_blank"
					   className="ui button">Go</a>
					{/* /.ui button */}
				</div>
				{/* /.right floated content */}
				<div className="content">
					<div className="header">
						{result.title}
					</div>
					{cleanSnippet}
				</div>
			</div>
		)
	})

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
			<div className="ui celled list">
				{renderedResults}
			</div>
			{/* /.ui celled list */}
		</div>
	)
}

export default Search;