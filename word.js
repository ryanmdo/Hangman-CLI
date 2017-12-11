// * **Word**: Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.


//the random word gets chosen upen creation
function Word(){
    var wordArr = ['arm','back','ears','eyes','face','feet','stomach','teeth','thumbs','toes','tongue','tooth','fingers','foot','hair','hands','head','knees','legs','mouth','neck','nose','shoulders','skin'];
    this.word = wordArr[Math.floor(Math.random())];;
    console.log('The random word is '+this.word)


    


}


module.exports = Word;