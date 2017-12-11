var inquirer = require('inquirer');
var prompt = require('prompt');
var Word = require('./word.js')
var Letter = require('./letter.js')





//starts and resets the game
function initializeGame(){
    console.log('\nWelcome to Hangman-CLI. It plays exactly as hangman should.')
    console.log('Seven incorrect guesses, and you lose. Be sure to keep caps lock OFF\n')

    var word = new Word()
    askLetter();

}

function askLetter(){
    inquirer.prompt([{
        name:'letter',
        type:'input',
        message: "Pick a letter."
    }]).then(function(response){

        //logic for accept and processing letter, or rejection
        var letter = new Letter(response);
        
        var isValid = letter.isValid();
        console.log('You have chosen letter, '+letter.letter);
        letter.printValidLetters();
        console.log(isValid);
    })

}


//generate word, using the same word bank from the first hangman game
function generateWord(){

    var chosenWord;
    

    //return chosenWord;

}




initializeGame();