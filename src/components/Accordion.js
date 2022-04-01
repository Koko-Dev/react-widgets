import React from 'react';

const Accordion = ({ questions }) => {
	const renderedQuestions = questions.map((question) => {
		return (
			<div key={question.question}>
				<div className="title active">
					<i className="dropdown icon"></i>
					{question.question}
				</div>
				<div className="content active">
					<p>{question.answer}</p>
				</div>
			</div>
		)
	})

	return <div className="ui styled accordion">{renderedQuestions}</div>

}

export default Accordion;