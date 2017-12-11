// * **Letter**: Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.



//this constructer filters for non-valid letters and additionally stores the remaining letters and incorrect answers
function Letter(ltr){
    this.letter = ltr.letter;
    this.remainingLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    this.incorrectLetters = [];
    this.correctLetters = [];



}




Letter.prototype.printRemainingLetters = function(){
    var stringedLetters = 'Remaining letters to choose from: ';
    for (var i=0;i<this.remainingLetters.length;i++){
        stringedLetters += this.remainingLetters[i] + ' ';
    }
    console.log(stringedLetters)
}


//checks to ensure that a lowercase letter than has not been selected gets used
Letter.prototype.isValid = function(){

    for (var i=0;i <this.remainingLetters.length;i++){
        if(this.remainingLetters[i]===this.letter){
            return true
        }
    }
    return false;
}


module.exports =  Letter;