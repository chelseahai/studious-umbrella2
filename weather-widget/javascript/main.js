// Access elements in the DOM
let input = document.querySelector(".zipcode");
let btn = document.querySelector(".search-button");
let form = document.querySelector("form");

let CITY_NAME = document.querySelector(".city-name");
let CITY_TEMP = document.querySelector(".temperature");
let image = document.querySelector("img"); // Image element for icon

// Function to get weather data
const getWeatherData = (zip) => {
  const API_KEY = config.WEATHER_API_KEY;
  const API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${API_KEY}`;

  // Reset and refocus input immediately after request starts
  form.reset();
  input.focus();

  fetch(API_ENDPOINT)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Invalid response");
      }
      return response.json();
    })
    .then((data) => {
      let local_weather_data = data;

      // Update city name and temperature
      CITY_NAME.textContent = local_weather_data.name;

      let weather_in_celsius = Math.round(local_weather_data.main.temp - 273);
      CITY_TEMP.textContent = weather_in_celsius + " °C";

      // Set weather icon
      let WEATHER_ICON = local_weather_data.weather[0].icon;
      image.setAttribute(
        "src",
        `https://openweathermap.org/img/wn/${WEATHER_ICON}@2x.png`
      );
      image.setAttribute("alt", local_weather_data.weather[0].description);
    })
    .catch((error) => {
      console.error("Error fetching weather:", error);

      // Clear UI if fetch fails
      CITY_NAME.textContent = "";
      CITY_TEMP.textContent = "Unable to fetch data.";
      image.setAttribute("src", "");
      image.setAttribute("alt", "");
    });
};

// Event handler for button click
const getZipcode = (e) => {
  e.preventDefault(); // Prevent form reload
  let ZIP_CODE = input.value;
  getWeatherData(ZIP_CODE);
};

// Attach event listener
btn.addEventListener("click", getZipcode);

