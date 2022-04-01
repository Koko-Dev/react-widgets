import React from 'react';
import Accordion from "./components/Accordion";

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

export default () => {
	return (
		<div>
			<Accordion questions={questions} />
		</div>
	)
}