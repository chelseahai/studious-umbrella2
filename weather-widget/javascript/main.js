console.log("this works");
<body>
  ...
   const API_KEY = “f1ac66e72cf355d313f37e7dac6760a7”;

   http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID={f1ac66e72cf355d313f37e7dac6760a7
}
  <script src="javascript/main.js"></script>

   const API_KEY = config.WEATHER_API_KEY;

   fetch(`http://api.openweathermap.org/data/2.5/weather?zip=10128&APPID=${WEATHER_API_KEY}`)
  .then(response => response.json())
  .then(data => console.log(data));

  function getWeatherData() {
  // fetch request goes in here :-)
}

getWeatherData()
</body>