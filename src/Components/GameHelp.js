/*
Filename: GameHelp.js

Code: This file contains the code for the GameHelp component. This component
is responsible for displaying the rules of the game to the user. It is
displayed as a modal when the user clicks on the "Request Help" button.
*/

// Import React and useState hook
import React, { useState } from 'react';

// GameHelp component
function GameHelp() {
    const [showHelp, setShowHelp] = useState(false);

    const toggleHelp = () => {
        setShowHelp(!showHelp);
    };

    return (
        <div>

            <button onClick={toggleHelp}>Request Help</button>
            {showHelp && (
        <div>
            <h2>Rules of the Game</h2>
            <p>
                This is a simple hangman game written in React. Here's how it 
                works:
            </p>
            <ul>
                <li>
                    It uses a random word generator to generate a word for you
                    to guess.
                </li>
                <li>
                    You can guess a letter by clicking on the letter buttons.
                </li>
                <li>
                    You start with 10 lives.
                </li>
                <li>
                    If you guess a letter correctly, it will be revealed in the
                    word.
                </li>
                <li>
                    If the letter is not in the word, you will lose a life.
                </li>
                <li>
                    If you guess the entire word correctly, you win.
                </li>
                <li>
                    If you run out of lives, you lose, and the word is
                    revealed.
                </li>
            </ul>
            <button onClick={toggleHelp}>Close Help</button>
        </div>
            )}
        </div>
    );
}

// Export GameHelp component
export default GameHelp;
