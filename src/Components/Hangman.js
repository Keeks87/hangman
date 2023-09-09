/*
Filename: Hangman.js

Code: Hangman Game Component to play the game and display the game status and
the image of the hangman based on the number of wrong guesses.
*/

// Importing React and randomWord, useState CSS and Images
import React, { useState } from "react";
import { randomWord } from "./RandomWord";
import "../CSS/Hangman.css";
import image0 from "../Images/0.jpg";
import image1 from "../Images/1.jpg";
import image2 from "../Images/2.jpg";
import image3 from "../Images/3.jpg";
import image4 from "../Images/4.jpg";
import image5 from "../Images/5.jpg";
import image6 from "../Images/6.jpg";
import image7 from "../Images/7.jpg";
import image8 from "../Images/8.jpg";
import image9 from "../Images/9.jpg";
import image10 from "../Images/10.jpg";

// Hangman Component
const Hangman = ({ maxWrong = 10, images }) => {
	// Define state using useState hook
	const [noOfWrong, setNoOfWrong] = useState(0);
	const [guessed, setGuessed] = useState(new Set());
	const [answer, setAnswer] = useState(randomWord());
  
	// Define a function to reset the game
	const reset = () => {
		setNoOfWrong(0);
		setGuessed(new Set());
		setAnswer(randomWord());
	};
  
	// Define a function to get the guessed word
	const guessedWord = () => {
	  	return answer
			.split("")
			.map((letter) => (guessed.has(letter) ? letter : "_"));
	};
  
	// Define a function to handle guesses
	const handleGuess = (letter) => {
	  	setGuessed((guessed) => new Set(guessed.add(letter)));
	  	if (!answer.includes(letter)) {
			setNoOfWrong((noOfWrong) => noOfWrong + 1);
	  	}
	};
  
	// Define a function to generate the keypad
	const generateKeypad = () => {
	  	return "qwertyuiopasdfghjklzxcvbnm".split("").map((letter) => (
			<button
		  		key={letter}
		  		value={letter}
		  		onClick={() => handleGuess(letter)}
		  		disabled={guessed.has(letter)}
			>
		  		{letter}
			</button>
	  	));
	};
	// Define the game state
	const gameOver = noOfWrong >= maxWrong;
	const isWinner = guessedWord().join("") === answer;
	
	// Define the game state message
	let gameState = generateKeypad();
	if (isWinner) gameState = "Congrats, You have won the Game";
	if (gameOver) gameState = "Better Luck Next Time";
	const restart = gameOver || isWinner;
  
	// Return the JS
	return (
	  	<div className="Hangman">
			<h2>Hangman</h2>
			<div className="Hangman-content">
				<div className="Hangman-image">
					<img src={images[noOfWrong]} alt="HangMan" />
				</div>
			<div className="Hangman-info">
				<p>Guesses Left: {maxWrong - noOfWrong}</p>
				<p className="Hangman-word">
		  			{!gameOver ? guessedWord() : answer}
				</p>
				<p className="Hangman-buttons">{gameState}</p>
				{restart && (
		  		<button id="reset" onClick={reset}>
					New Game?
		  		</button>
				)}
			</div>
			</div>
	  	</div>
	);
};
  
// Set the default props for maxWrong and images
Hangman.defaultProps = {
	maxWrong: 10,
	images: [
		  image0, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10
	]
};
  
// Export the Hangman Component
export default Hangman;
