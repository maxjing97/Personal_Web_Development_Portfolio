//get the dom node with the list of all the possible astrological signs
const astrologicalSigns = document.getElementById("astrological_signs");

//generate click event for each button.
for (let i = 0; i < astrologicalSigns.childNodes.length; i++) {
    let element = astrologicalSigns.childNodes[i]; //set the element at each iteration to be the sign at a certain index in the list of nodes
    element.addEventListener('click', (e) => { //set the sign to be the current element's id;
        returnResult(e.target.id);  //trigger the function to change the text on the screen based on the clicked button's id;
    });
}

const returnResult = (sign_id) => {
    document.getElementById("result").innerText = generateHoroscope(sign_id); //send the generated message to the user
}

