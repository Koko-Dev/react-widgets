import React, {useState} from 'react';
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";


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
		label: 'A Pretty Purple',
		value: 'purple'
	}
]


export default () => {
	const [selected, setSelected] = useState(options[0]);
	return (
		<div>
			<Header />
			<Route path="/" >
				<Accordion questions={questions}/>
			</Route>
			<Route path="/list">
				<Search />
			</Route>
			<Route path="/dropdown">
				<Dropdown
					label="Select a Color"
					options={options}
					selected={selected}
					onSelectedChange={setSelected}
				/>
			</Route>
			<Route path="/translate">
				<Translate />
			</Route>

		</div>
	)
}