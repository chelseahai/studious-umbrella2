// Step 1 – Grab DOM elements
const input = document.querySelector(".zipcode");
const btn = document.querySelector(".search-button");

// Step 2 – Declare the API key
const API_KEY = config.WEATHER_API_KEY;

// Step 3 – Define the weather fetcher function
const getWeatherData = (zip) => {
  const API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=${API_KEY}`;

  fetch(API_ENDPOINT)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Invalid response from weather API.");
      }
      return response.json();
    })
    .then((data) => {
      const local_weather_data = data;
      console.log(local_weather_data); // Inspect the JSON structure
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
};

// Step 4 – Define the event handler
const getZipCode = (e) => {
  e.preventDefault(); // Prevent form submission from reloading the page
  const ZIP_CODE = input.value;
  getWeatherData(ZIP_CODE);
};

// Step 5 – Attach the event listener
btn.addEventListener("click", getZipCode);
