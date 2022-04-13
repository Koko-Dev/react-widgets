import React, {useState, useEffect} from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
	const [translated, setTranslated] = useState('');

	useEffect(() => {
		const url = 'https://translation.googleapis.com/language/translate/v2';

		// Todo: Make request to Google API
		// Todo: Helper async function which makes the call to API
		//  through axios and targets the API data property specifically
		const doTranslation = async () => {
			const { data } = await axios.post(url, {}, {
				params: {
					q: text,
					target: language.value,
					key: 'Google API Translation Key'
				}
			})

			setTranslated(data.data.translations[0].translatedText);
		};

		doTranslation()
	}, [language, text])

	return (
		<div>
			<h1 className="ui header">{translated}</h1>
			{/* /.ui header */}
		</div>
	)
}

export default Convert;