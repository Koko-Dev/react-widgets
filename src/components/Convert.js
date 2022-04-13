import React, {useState, useEffect} from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
	const [translated, setTranslated] = useState('');
	const [debouncedText, setDebouncedText] = useState(text);

	useEffect(() => {
			const timerId = setTimeout(() => {
				setDebouncedText(text);
			}, 500);

			// note: If text piece of state changes before 500 ms timer elapses,
			//  cancel timer in cleanup function
			return () => {
				clearTimeout(timerId);
			}
		}, [text]);

	useEffect(() => {
		const doTranslation = async () => {
			const url = 'https://translation.googleapis.com/language/translate/v2';
			const { data } = await axios.post(url, {}, {
				params: {
					q: debouncedText,
					target: language.value,
					key: 'Google Translations API KEY'
				}
			})
			setTranslated(data.data.translations[0].translatedText);
		};

		doTranslation()

	}, [language, debouncedText]);

	return (
		<div>
			<h1 className="ui header">{translated}</h1>
			{/* /.ui header */}
		</div>
	)
}

export default Convert;