import React, { useState } from 'react';

const Search = () => {
	const [term, setTerm] = useState('');

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