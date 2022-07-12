class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.press = document.getElementById('w-press');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = `${weather.main.temp}\u00B0C`;
        // this.icon.setAttribute();
        this.humidity.textContent = `Relative Humidity  : ${weather.main.humidity}% `;
        this.feelsLike.textContent = `Feels like  :${weather.main.feels_like}\u00B0C`;
        this.press.textContent=`Pressure  :${weather.main.pressure}mbar`
        this.wind.textContent = `Wind Speed  :${weather.wind.speed}Km/hr`;
    }
}