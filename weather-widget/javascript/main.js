// Step 1 – Select DOM elements
let input = document.querySelector(".zipcode");
let btn = document.querySelector(".search-button");

// Step 2 – Weather fetch function
const getWeatherData = (zip) => {
  const API_KEY = config.WEATHER_API_KEY;
  const API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=${API_KEY}`;

  fetch(API_ENDPOINT)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Weather data not found.");
      }
      return response.json();
    })
    .then((data) => {
      let local_weather_data = data;
      console.log(local_weather_data); // View full JSON in console
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
};

// Step 3 – Event handler
const getZipCode = (e) => {
  e.preventDefault(); // Prevent form reload
  let ZIP_CODE = input.value;
  getWeatherData(ZIP_CODE);
};

// Step 4 – Attach event listener
btn.addEventListener("click", getZipCode);
