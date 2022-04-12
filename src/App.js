import React, {useState} from 'react';
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const questions = [
	{
		question: 'Which instructors are the best JavaScript instructors?',
		answer: 'Traversy, Max and Jonas.'
	},
	{
		question: 'What course subjects do I take to become a developer?',
		answer: 'HTML, CSS, Advanced CSS, Javascript, and NodeJS'
	},
	{
		question: 'Why isn\'t React, Vue or Angular on that list?',
		answer: 'Because one should master the basics first'
	},
	{
		question: 'How long does it take to become a great developer?',
		answer: '10,000 hours'
	}
];

// For Dropdown
const options = [
	{
		label: 'The Color Red',
		value: 'red'
	},
	{
		label: 'The Color Green',
		value: 'green'
	},
	{
		label: 'A Shade of Blue',
		value: 'blue'
	},
	{
		label: 'A Pretty Pink',
		value: 'pink'
	}
]

export default () => {
	const [selected, setSelected] = useState(options[0]);
	const [showDropdown, setShowDropdown] = useState(true);
	return (
		<div>
			{/*<Accordion questions={questions} />*/}
			{/*<Search />*/}

			<button onClick={() => setShowDropdown(!showDropdown)}>
				Toggle Dropdown
			</button>
			{ showDropdown ?
				<Dropdown
					selected={selected}
					options={options}
					onSelectedChange={setSelected}
				/> : null
			}

		</div>
	)
}