import React from 'react';

const Search = () => {
	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label htmlFor="">Enter Search Term</label>
					<input type="text" className="input"/>
					{/* /.input */}
				</div>
				{/* /.field */}
			</div>
			{/* /.ui form */}
		</div>
	)
}

export default Search;