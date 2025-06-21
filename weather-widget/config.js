// config.js

const CONFIG = {
  MAPBOX_TOKEN: 'f1ac66e72cf355d313f37e7dac6760a7',
  INITIAL_VIEW: {
    center: [-73.9851, 40.7589],  // NYC Midtown
    zoom: 11,
    style: 'mapbox://styles/mapbox/light-v11'
  },
  DATA_API_URL: 'https://data.cityofnewyork.us/resource/uvks-tn5n.geojson?$limit=1000'
};

export default CONFIG;
