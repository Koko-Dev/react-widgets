import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
	const [term, setTerm] = useState('programming');
	const [debouncedTerm, setDebouncedTerm] = useState(term);
	const [results, setResults] = useState([]);

	/*
		FIXME: On render, there are two calls to the API instead of one
			-- Part 1:  Anytime that we update term, thanks to
			user typing inside that input, we are going to
			setup a timer to update debouncedTerm.
			-- Part 2.  And if a user then types something else,
			 we are going to cancel the previous timer, immediately
			  update term and set up a new timer to update debouncedTerm.
	*/
	useEffect(() => {

		// Fixme: Part 1
		// step: 1. Whenever we execute setTimeout, we update debouncedTerm
		const timerId = setTimeout(() => {
			setDebouncedTerm(term);
		}, 1000)

		// step: 2. Return a cleanup function that is going to cancel that timer
		return () => {
			clearTimeout(timerId);
		}

	}, [term])


	// note: The only thing useEffect allows to
	//  be returned is another function
	useEffect(() => {
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

		if (term && !results.length) {
			search();
		}

		const timeoutId = setTimeout(() => {
			if (term) {
				search();
			}
		}, 1000);

		return () =>  {
			clearTimeout(timeoutId);
		}

	}, [term, results.length])

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