const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c3e1dcf7d7msh5bc407ca257ee45p17c588jsncac71c122fc1',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city
    cloud_pct.innerHTML = "Loading...";
    max_temp.innerHTML = "Loading...";
    min_temp.innerHTML = "Loading...";
    temp.innerHTML = "Loading...";
    humidity.innerHTML = "Loading...";
    feels_like.innerHTML = "Loading...";
    sunrise.innerHTML = "Loading...";
    sunset.innerHTML = "Loading...";
    wind_degrees.innerHTML = "Loading...";
    wind_speed.innerHTML = "Loading...";



    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {

            
            const sunriseDate = new Date(response.sunrise * 1000);
            // Get the hours and minutes from the Date object
            const sunriseHours = sunriseDate.getHours();
            const sunRiseHours = sunriseDate.getMinutes();
            const formattedsunriseHours = sunriseHours < 10 ? "0" + sunriseHours : sunriseHours;
            const formattedsunRiseHours = sunRiseHours < 10 ? "0" + sunRiseHours : sunRiseHours;
            const sunRiseTime = formattedsunriseHours + ":" + formattedsunRiseHours;

            const sunsetDate = new Date(response.sunset * 1000);
            // Get the hours and minutes from the Date object
            const sunsetHours = sunsetDate.getHours();
            const sunsetmins = sunriseDate.getMinutes();
            const formattedsunsetHours = sunsetHours < 10 ? "0" + sunsetHours : sunsetHours;
            const formattedsunsetmins = sunsetmins < 10 ? "0" + sunsetmins : sunsetmins;
            const sunsetTime = formattedsunsetHours + ":" + formattedsunsetmins;

        
            console.log(response)
            cloud_pct.innerHTML = response.cloud_pct
            document.getElementById("max_temp").innerHTML = response.max_temp + "°C";;
            min_temp.innerHTML = response.min_temp + "°C";
            temp.innerHTML = response.temp + "°C";
            humidity.innerHTML = response.humidity + "%"
            feels_like.innerHTML = response.feels_like + "°C";
            sunrise.innerHTML = sunRiseTime + " am";
            sunset.innerHTML = sunsetTime + " pm";
            wind_degrees.innerHTML = response.wind_degrees
            wind_speed.innerHTML = response.wind_speed + " m/s"

            // Now, 'sunsetTime' contains the sunset time in HH:MM format
            // console.log(sunRiseTime);
        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Hyderabad")