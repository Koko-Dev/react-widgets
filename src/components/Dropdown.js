import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
	const [open, setOpen] = useState(false);
	const ref = useRef();

	useEffect(() => {
		document.body.addEventListener('click', (event) => {
			// important: event.target will return the html element that was clicked on
			// console.log(event.target);

			/*TODO: event.target is the element clicked on; if
			   ref.current contains anything inside of div.ui.form,
			    then we will not setOpen to false
				 */
			if (ref.current.contains(event.target)) return;
			setOpen(false);
		},
			{ capture: true}
		);
	}, []);


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
		<div ref={ref} className="ui form">
			<div className="field">
				<label className="label">Select a Color</label>
				{/* /.label */}
				<div className={`ui selection dropdown ${open ? 'visible active' : ''}`}
				     onClick={() => setOpen(!open)}>
					<i className="dropdown icon"></i>
					{/* /.dropdown icon */}
					<div className="text">{selected.label}</div>
					{/* /.text */}
					<div className={`menu ${open ? 'visible transition' : ''}`}>
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