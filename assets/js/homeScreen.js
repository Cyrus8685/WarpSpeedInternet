let autocomplete;
let place;

async function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete'),
        {
            componentRestrictions: {'country': ['US']},
            fields: ['place_id', 'geometry', 'name','address_components',]
        });
    autocomplete.addListener('place_changed', onPlaceChanged);
}

async function onPlaceChanged(){
    place = autocomplete.getPlace ();
    if (!place.geometry) {
        document.getElementById('address').placeholder = 'Enter a place';
    } else {
        document.getElementById('details').innerHTML = place.name;
    }
    console.log(place.address_components);
}

addresscheck.addEventListener("click", async function onPlaceChanged() {
    let isInFlorida = false;
    place.address_components.forEach(component => {
        if (component.long_name === "Florida") {
            isInFlorida = true;
        }
    });

    var input1 = document.getElementById('autocomplete').value;
    localStorage.setItem('address', input1);

    var input2 = document.getElementById('fullname').value;
    localStorage.setItem('name', input2);

    var input3 = document.getElementById('subscriptionEmail').value;
    localStorage.setItem('email', input3);

    if (isInFlorida) {
        window.location.assign("/assets/html/Planspage.html"); 
     } else {
         alert("Not Within Florida");
     }
    
});