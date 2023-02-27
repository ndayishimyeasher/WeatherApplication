let weather = {

    "apiKey": "f0ac6a0d62f6bfbc636751b878ca2d34"
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.appKey

        )

        .then((response) => response.json()
            .then((data) => this.displayWeather(data)) {

            })

    }
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed)
        document.querySelector(".city").innetText = "Weather in " + name;
        document.querySelector(".icon").src = "  https: //openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(.description).innetText = description;
        document.querySelector(".temp").innetText = temp + "c"
        document.querySelector(".humidity").innetText = "humidity" + humidity + "%";
        document.querySelector(".sped").innetText = "Wind speed" + speed + "km/h"

    }


        search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
};
document.querySelector(".search button").addEventListener("click", function() {

})