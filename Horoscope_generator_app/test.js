const mainProgram = require("./main"); //imports the horoscope function and the object.
const assert = require("assert"); //import assert

//this tests the main.js file to check if the horoscope contain the correct keywords.

describe('generateHoroscope', () => {

    describe('test cases when the Horoscope is a fire sign.', () => {
        it('returns a string that contains words based on the sign, stored in the words object', () => {
            //list of the fire astrology signs in the correct format.
            const signs = ['aries', "leo", "sagittarius"];
            //gets the part of the object containing the words particular to the fire signs.
            const fire_words = mainProgram.words.traits.fire;
            
            //test the function 500 times
            for (let testing = 0; testing < 500; testing++) {
                //call function to generate sentence based on any random index in the sign category array.
                let sentence = mainProgram.generateHoroscope (signs[Math.floor( Math.random()) *  signs.length]);
                
                let currentPassed = false; //boolean to store the if the current test failed.
                
                //iterate the testing array of fire signs to check if any sentence generated does not contain any work in the array.
                for (let i = 0; i < signs.length; i++) {
                    if(sentence.includes(fire_words[i])) { //if sentence contains any word from the array, set the boolean to true.
                        currentPassed = true;
                    }
                }
                //if after interation through the array, no match is found or currentPassed = false, throw an error
                if (currentPassed === false) {
                    assert.equal(true, currentPassed);
                }
            }
        });
    });

    describe('test cases when the Horoscope is a water sign.', () => {
        it('returns a string that contains words based on the sign, stored in the words object', () => {
            //list of the water astrology signs in the correct format.
            const signs = ["pisces", "cancer", "scorpio"];
            //gets the part of the object containing the words particular to the water signs.
            const water_words = mainProgram.words.traits.water;
            
            //test the function 500 times
            for (let testing = 0; testing < 500; testing++) {
                //call function to generate sentence based on any random index in the sign category array.
                let sentence = mainProgram.generateHoroscope (signs[Math.floor( Math.random()) *  signs.length]);
                
                let currentPassed = false; //boolean to store the if the current test failed.
                
                //iterate the testing array of fire signs to check if any sentence generated does not contain any work in the array.
                for (let i = 0; i < signs.length; i++) {
                    if(sentence.includes(water_words[i])) { //if sentence contains any word from the array, set the boolean to true.
                        currentPassed = true;
                    }
                }
                //if after interation through the array, no match is found or currentPassed = false, throw an error
                if (currentPassed === false) {
                    assert.equal(true, currentPassed);
                }
            }
        });
    });

    describe('test cases when the Horoscope is a earth sign.', () => {
        it('returns a string that contains words based on the sign, stored in the words object', () => {
            //list of the earth astrology signs in the correct format.
            const signs = ["taurus" ,"virgo", "capricorn"];
            //gets the part of the object containing the words particular to the earth signs.
            const earth_words = mainProgram.words.traits.earth;
            
            //test the function 500 times
            for (let testing = 0; testing < 500; testing++) {
                //call function to generate sentence based on any random index in the sign category array.
                let sentence = mainProgram.generateHoroscope (signs[Math.floor( Math.random()) *  signs.length]);
                
                let currentPassed = false; //boolean to store the if the current test failed.
                
                //iterate the testing array of fire signs to check if any sentence generated does not contain any work in the array.
                for (let i = 0; i < signs.length; i++) {
                    if(sentence.includes(earth_words[i])) { //if sentence contains any word from the array, set the boolean to true.
                        currentPassed = true;
                    }
                }
                //if after interation through the array, no match is found or currentPassed = false, throw an error
                if (currentPassed === false) {
                    assert.equal(true, currentPassed);
                }
            }
        });
    });
        
    describe('test cases when the Horoscope is a air sign.', () => {
        it('returns a string that contains words based on the sign, stored in the words object', () => {
            //list of the air astrology signs in the correct format.
            const signs = ["aquarius", "gemini", "libra"];
            //gets the part of the object containing the words particular to the air signs.
            const air_words = mainProgram.words.traits.air;
            
            //test the function 500 times
            for (let testing = 0; testing < 500; testing++) {
                //call function to generate sentence based on any random index in the sign category array.
                let sentence = mainProgram.generateHoroscope (signs[Math.floor(Math.random()) *  signs.length]);
                
                let currentPassed = false; //boolean to store the if the current test failed.
                
                //iterate the testing array of fire signs to check if any sentence generated does not contain any work in the array.
                for (let i = 0; i < signs.length; i++) {
                    if(sentence.includes(air_words[i])) { //if sentence contains any word from the array, set the boolean to true.
                        currentPassed = true;
                    }
                }
                //if after interation through the array, no match is found or currentPassed = false, throw an error
                if (currentPassed === false) {
                    assert.equal(true, currentPassed);
                }
            }
        });
    });

});
