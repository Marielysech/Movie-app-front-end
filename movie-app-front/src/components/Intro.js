import img from '../assets/oldTV.jpg'
import React, {useState} from 'react'

const Intro = () => {

const [movieQuotes, setMQuotes] = useState("")

// const options = {
// 	method: 'GET',
// 	headers: {
// 		Authorization: 'Token token=yd8WzkWNEEzGtqMSgiZBrwtt',
// 		'X-RapidAPI-Host': 'juanroldan1989-moviequotes-v1.p.rapidapi.com',
// 		'X-RapidAPI-Key': 'b0f2f32e55msh8bcc96ad842948fp166d8fjsn45a33f536690'
// 	}
// };

// fetch('https://juanroldan1989-moviequotes-v1.p.rapidapi.com/api/v1/quotes?actor=Al%20Pacino', options)
// 	.then(response => response.json())
// 	.then(data => setMQuotes(data))
// 	.catch(err => console.error(err));

    return (
        <div className='introContainer'>            <div><h2 className='introText'>Install yourself, pick a movie, and <em>enjoy</em></h2></div>
        </div>
    )
}

export default Intro