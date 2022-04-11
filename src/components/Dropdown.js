import React from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
	const renderedOptions = options.map(option => {
		if (option.value === selected.value) return null;
		return (
			<div key={option.value}
			     className="item"
			     onClick={() => onSelectedChange(option)}>
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
					<div className="text">{selected.label}</div>
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