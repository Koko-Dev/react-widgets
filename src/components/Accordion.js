import React, { useState } from 'react';

const Accordion = ({ questions }) => {
	const onTitleClick = (index) => {
		console.log('Title clicked', index);
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

	return <div className="ui styled accordion">{renderedQuestions}</div>

}

export default Accordion;