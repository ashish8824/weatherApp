class Weather{
    constructor(city) {
        this.apikey = '14a6424313165a2fe072ec8cf8a939b6';
        this.city = city;

    }
    
    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apikey}&units=metric`);

        const responseData = await response.json();

        return responseData;
    }

    // Change weather location
    changeLocation(city) {
        this.city = city;
    }

}