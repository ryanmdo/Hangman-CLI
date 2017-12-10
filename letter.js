// * **Letter**: Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.



//this constructer primarily acts like a filter for non-valid letters and a store for the chosen letter
function Letter(ltr){
    this.letter = ltr.letter;
    this.letterBank = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    //console.log(ltr.letter)



}


//checks to ensure that a lowercase letter than has not been selected gets used
Letter.prototype.isValid = function(){
    
    validLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    for (var i=0;i <validLetters.length;i++){
        if(validLetters[i]===this.letter){
            return true
        }
    }
    return false;
}


module.exports =  Letter;