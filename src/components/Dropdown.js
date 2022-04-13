import React, {useEffect, useRef, useState} from 'react';
import './Dropdown.css';

const Dropdown = ({options, selected, onSelectedChange}) => {
	const [open, setOpen] = useState(false);
	const ref = useRef();

	useEffect(() => {
		const onBodyClick = (event) => {
			/*TODO: Check to see if the element that was
			   clicked on (event.target) is inside of
			   ref.current (div.ui.form).  If it is, return early.
			 Note: When we return early, this piece of code will run
			   and dropdown will close:
				 Code:
				  <div className={`ui selection dropdown ${open ? 'visible active' : ''}`}
				  onClick={() => setOpen(!open)}>...</div>
			 */
			if (ref.current.contains(event.target)) return;
			setOpen(false);
		}

		document.body.addEventListener('click', onBodyClick, {capture: true});

		// Todo:  UseCase: Dropdown Component is removed from the DOM.
		//  Solution: Remove event listener in useEffect CLEANUP function
		//  to avoid error:
		//  'TypeError: Cannot read property 'contains' of null'
		// Note:
		//  We understand that if we should remove the
		//  Dropdown Component from displaying on the screen the event
		//  listener would still run, so we have to make sure to
		//  remove it on cleanup. We would receive a
		//  TypeError because ref prop points to ref in div.ui.form;
		//  if there is no Dropdown Component then
		//  ref.current evaluates to  null because we no longer
		//  have an element (div.ui.form) to refer to.
		//  therefore conditional 	if (ref.current.contains(event.target))
		//  will break, i.e. if (null.contains(event.target)) = BAD
		return () => {
			// Note: useEffect cleanup function invoked when we
			//  remove Dropdown Component from the DOM.
			document.body.removeEventListener('click', onBodyClick, {capture: true});
		}
	}, []);


	const renderedOptions = options.map(option => {
		if (option.value === selected.value) return null;
		let divStyle = {
			color: option.value
		};
		return (
			<div key={option.value}
			     style={ divStyle }
			     className="item"
			     onClick={() => onSelectedChange(option)}>
				{option.label}
			</div>
		)
	})

	return (
		<div ref={ref}
		     className="ui form">
			<div className="field">
				<label className="label">Select a Color</label>
				{/* /.label */}
				<div className={`ui selection dropdown ${open ? 'visible active' : ''}`}
				     onClick={() => setOpen(!open)}>
					<i className="dropdown icon"></i>
					{/* /.dropdown icon */}
					<div className="text" style={{color: selected.value}}>{selected.label}</div>
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