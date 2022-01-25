const search_bar = document.getElementById("search-bar"); //get the input search element
const results_section = document.getElementById("search-results"); //get the section to populate with the search results
const detailed_results_section = document.getElementById("detailed-results");

//get the json object containing the restaurants
const restaurantsJSON = loadData();

//get the search string and call the function to display a list of restaurants.
search_bar.addEventListener('keyup', (e) => {
    let searchString = e.target.value; //returns the value put into the search string
    //if the searchString is empty, call the clear function
    if (searchString.length === 0) {
        clearAll();
    } else {
        displayResults();
    }
    
});

//function calls that adds calls function to display the research and to add key event listeners.
const displayResults = () => {
    clearAll(); //calls function to clear search bar after each new search
    search_bar.style.marginBottom = "0px";//displays search bar styling

    let names = ['example1', 'example2', 'example3'];

    //iterate through all values of the results
    //add new elements representing each restaurant
    //add a event listener to redirect the user to detailed info if clicked
    //also add an event listener to color the element if hovered:
    for (let i = 0; i < names.length; i++) {
        let newRestaurantElement = document.createElement('option');
        newRestaurantElement.innerHTML = names[i] + "<br>";
        newRestaurantElement.id = names[i]; //assign an id.
        
        //calls function that adds event listener that allows more detailed infomation to be shown
        displaydetails(newRestaurantElement);
        //calls function to add events that give the hover effect
        hoverEffect(newRestaurantElement);


        results_section.appendChild(newRestaurantElement); //add newly created element
    }
}

// function to display details of a restaurant when clicked in the search bar.
const displaydetails = (element) => {
     //add event listener to show 
    element.addEventListener('click', (event) => {
        let restaurant = event.target; //this is the restaurant clicked in the search bar.
        results_section.innerHTML = restaurant.id + "<br>"; //changes the list of restaurants displayed so that only the restaurant displayed in detail is shown
        results_section.style.color = 'aqua'; //change the color of the only displayed restaurant after the click
        detailed_results_section.style.display ='block'; //show the detailed box


        //text displayed
        detailed_results_section.innerHTML = "Detailed Restaurant Info: <br>"+ 
        "Restaurant name: "+ restaurant.id + "<br> year founded-whatever"; 
    });
}



//function to add a hover effect to all the returned search elements
const hoverEffect = (element) => {
    element.addEventListener('mouseover', (event) => {
        event.target.style.color='aqua';
    })
    element.addEventListener('mouseout', (event) => {
        event.target.style.color='white';
    })
}

//function to clear the results section after each new search
const clearAll = () => {
    results_section.innerHTML =""; //remove all the html in the results section
    detailed_results_section.innerHTML=""; //remove all the html in the detailed display section.
    detailed_results_section.style.display='none'; //hide the detailed results selection.
    results_section.style.color = 'white'; //changes default text color to white.
}

