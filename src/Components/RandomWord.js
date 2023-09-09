/*
Filename: RandomWord.js

Code: RandomWord Component to generate a random word from the 
Programming_Language array.
*/

// Programming_Language array
let Programming_Language = [
	"java",
	"c",
	"ruby",
	"perl",
	"python",
	"r",
	"javascript",
	"css",
	"html",
	"php",
	"sql",
	"mysql",
	"cobol",
	"scala",
	"abap",
	"xml",
	"kotlin",
	"matlab",
	"pascal",
	"typescript",
];

// Function to generate a random word from the Programming_Language array
function randomWord() {
  	return Programming_Language[
    	Math.floor(Math.random() * Programming_Language.length)
  	];
}

// Exporting randomWord function
export { randomWord };
