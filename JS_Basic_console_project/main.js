let AstrologicalSign = ""; //global variable to store astrological signs
let category = ""; //global variable to store the category of astrological sign entered

//function to categorize and validate the initial input, and to generate the corresponding message.
categorizeAstrologicalSign = (input) => {
    
    input = input.toLowerCase(); //converts all signs to lowercase
    
   if(input === "aries" || input === "leo" || input === "sagittarius") {
    category = "fire";
    return true; //true is returned if the input is valid
   } 
   if(input === "pisces" || input === "cancer" || input === "scorpio") {
    category = "water";
    return true;
   }
   if(input === "taurus" || input === "virgo" || input === "capricorn") {
    category = "earth";
    return true;
   }
   if(input === "aquarius" || input === "gemini" || input === "libra") {
    category = "air";
    return true;
   } else {
       console.log("Check your spelling, please try again")
       return false;
   }
}

//function to generate a random number from 1 to 10 (inclusive on both ends)/
generateRandomNumber10 = () => {
    return Math.floor(Math.random() * 10 + 1);
}

//function to generate a random number from 1 to 3 (inclusive on both ends)/
generateRandomNumber3 = () => {
    return Math.floor(Math.random() * 3 + 1);
}

//here, we set three possible formats an astrological can take

















//          All code below are inputs and outputs to and from the terminal (using the node.js environment).
const prompt = require('prompt-sync')();

console.log("Horoscope finder for your astrological sign: ")
console.log("possible signs are spelled:\n Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius and Pisces.\n\n");

//try inputing as long as the input isn't valid
do {
    AstrologicalSign = prompt('Enter your astrological sign: ');
    
} while (!categorizeAstrologicalSign(AstrologicalSign))


  