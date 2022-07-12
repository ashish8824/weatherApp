//Init Storage object
const storage = new Storage();

//Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city);

// Init ui object
const ui = new UI();


// Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

//change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {

    const city = document.getElementById('city').value;

    //change loaction
    weather.changeLocation(city);

    //set location in weather
    storage.setLocationData(city);

    //Get and display weather
    getWeather();

    //close modal
    $('#locModal').modal('hide');
});





function getWeather() {
    weather.getWeather()
        .then(result => {
            console.log(result);
            ui.paint(result);
        })
        .catch(err => console.log(err));
}
