import React, {useState, useEffect} from "react";
import axios from "axios";

const Convert = ({ language, text }) => {

	useEffect(() => {
		console.log('New language or text')
	}, [language, text])
	return <div />
}

export default Convert;