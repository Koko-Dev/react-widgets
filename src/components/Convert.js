import React, {useState, useEffect} from "react";
import axios from "axios";

const Convert = ({ language, text }) => {

	useEffect(() => {
		const url = 'https://translation.googleapis.com/language/translate/v2';
		// Todo: Make request to Google API
		axios.post(url, {}, {
			params: {
				q: text,
				target: language.value,
				key: 'Your Google Translation API Key'
			}
		})
	}, [language, text])
	return <div />
}

export default Convert;