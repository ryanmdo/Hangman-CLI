var inquirer = require('inquirer');
var prompt = require('prompt');
var Word = require('./word.js')
var Letter = require('./letter.js')


var word = new Word();



//starts and resets the game
function initializeGame(){
    console.log('\nWelcome to Hangman-CLI.')
    console.log('Seven incorrect guesses, and you lose. Be sure to keep caps lock OFF\n')

    askLetter();
    isWinorLoss();
    //some recursive function for the win condition
    // var gameCompleted = false;
    // for(gameCompleted!){
    //     //keep playing, keep asking for letters
    //     askLetter();
    // }

}

function askLetter(){
    console.log('askLetter() called');

    inquirer.prompt([{
        name:'letter',
        type:'input',
        message: "Pick a letter."
    }]).then(answer =>{
        console.log('accepted')
        var letter = new Letter(answer);
        //logic for accept and processing letter, or rejection
        
        
        var isValid = letter.isValid();
        console.log('You have chosen letter, '+letter.letter);
        letter.printRemainingLetters();
        console.log(isValid);
    })

}



//is called after every guessed letter to see if user has won or lost. Returns false, until it is true
function isWinOrLoss(){
    console.log('isWinOrLoss() called');

    if ((letter.incorrectLetters.length === 7) || (letter.correctLetters.length === word.word.length)){
        return true;
    } else {
        console.log('No win or loss, should ask for another letter')
        return false;
    }

}

//generate word, using the same word bank from the first hangman game




initializeGame();