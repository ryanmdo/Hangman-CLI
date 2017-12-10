var inquirer = require('inquirer');
var prompt = require('prompt');
var Word = require('./word.js')
var Letter = require('./letter.js')


var tempWord;



//starts and resets the game
function initializeGame(){
    tempWord = generateWord();
    askLetter();

}

function askLetter(){
    inquirer.prompt([{
        name:'letter',
        type:'input',
        message: "Pick a letter."
    }]).then(function(response){

        console.log('You have chosen letter, '+response)
        console.log(response.letter)
    })

}


//generate word, using the same word bank from the first hangman game
function generateWord(){

    var chosenWord;
    var wordArr = ['arm','back','ears','eyes','face','feet','stomach','teeth','thumbs','toes','tongue','tooth','fingers','foot','hair','hands','head','knees','legs','mouth','neck','nose','shoulders','skin'];

    //return chosenWord;

}



initializeGame();