import React from 'react';

const Dropdown = ({ options }) => {
	const renderedOptions = options.map(option => {
		return (
			<div key={option.value} className="item">
				{option.label}
			</div>
		)
	})

	return (
		<div className="ui form">
			<div className="field">
				<label className="label">Select a Color</label>
				{/* /.label */}
				<div className="ui selection dropdown visible active">
					<i className="dropdown icon"></i>
					{/* /.dropdown icon */}
					<div className="text">Select Color</div>
					{/* /.text */}
					<div className="menu visible transition">
						{renderedOptions}
					</div>
					{/* /.menu visible transition */}
				</div>
				{/* /.ui selection dropdown visible active */}
			</div>
			{/* /.field */}
		</div>
	)
}

export default Dropdown;