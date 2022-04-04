import React, { useState } from 'react';

const Accordion = ({ questions }) => {
	// Todo: Initialize a new piece of state
	const [activeIndex, setActiveIndex] = useState(null);

	const onTitleClick = (index) => {
		// Todo: Update a new piece of state everytime a user
		//  clicks on a question
		setActiveIndex(index);
	}

	const renderedQuestions = questions.map((question, index) => {
		return (
			<React.Fragment key={question.question}>
				<div className="title active"
				     onClick={() => onTitleClick(index)}>
					<i className="dropdown icon"></i>
					{question.question}
				</div>
				<div className="content active">
					<p>{question.answer}</p>
				</div>
			</React.Fragment>
		)
	})

	return <div className="ui styled accordion">
		{renderedQuestions}
		<h1>{activeIndex}</h1>
	</div>

}

export default Accordion;