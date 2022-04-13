import React, { useState } from 'react';
import Dropdown from './Dropdown';

const options = [
	{
		label: 'Africaans',
		value: 'af'
	},
	{
		label: 'Albanian',
		value: 'sq'
	},
	{
		label: 'Arabic',
		value: 'ar'
	},
	{
		label: 'Bosnian',
		value: 'bs'
	},
	{
		label: 'Catalan',
		value: 'ca'
	},
	{
		label: 'Dutch',
		value: 'nl'
	},
	{
		label: 'Hindi',
		value: 'hi'
	},
	{
		label: 'Finnish',
		value: 'fi'
	},
	{
		label: 'German',
		value: 'de'
	}
];

const Translate = () => {
	const [language, setLanguage] = useState(options[0]);
	const [text, setText] = useState('');

	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label>Enter Text</label>
					<input
						type="text"
						value={text}
						onChange={(e) => setText(e.target.value)}/>
				</div>
				{/* /.field */}
			</div>
			{/* /.ui form */}
	
			<Dropdown
				label="Select a Language"
				options={options}
				selected={language}
				onSelectedChange={setLanguage}
			/>
		</div>
	)
}

export default Translate;