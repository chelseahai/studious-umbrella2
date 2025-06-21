// main.js

import CONFIG from './config.js';

// 1. Set up Mapbox map
mapboxgl.accessToken = CONFIG.MAPBOX_TOKEN;

const map = new mapboxgl.Map({
  container: 'map',
  style: CONFIG.INITIAL_VIEW.style,
  center: CONFIG.INITIAL_VIEW.center,
  zoom: CONFIG.INITIAL_VIEW.zoom
});

// 2. Add navigation controls
map.addControl(new mapboxgl.NavigationControl());

// 3. Load GeoJSON data from NYC Open Data API
async function loadData() {
  try {
    const response = await fetch(CONFIG.DATA_API_URL);
    const data = await response.json();

    map.on('load', () => {
      map.addSource('wifi-locations', {
        type: 'geojson',
        data: data
      });

      map.addLayer({
        id: 'wifi-points',
        type: 'circle',
        source: 'wifi-locations',
        paint: {
          'circle-radius': 5,
          'circle-color': '#007cbf',
          'circle-opacity': 0.8
        }
      });

      // Popup interaction
      map.on('click', 'wifi-points', (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const properties = e.features[0].properties;
        const name = properties.name || 'Wi-Fi Location';
        const provider = properties.provider || 'Unknown Provider';

        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(`<strong>${name}</strong><br/>Provider: ${provider}`)
          .addTo(map);
      });

      map.on('mouseenter', 'wifi-points', () => {
        map.getCanvas().style.cursor = 'pointer';
      });

      map.on('mouseleave', 'wifi-points', () => {
        map.getCanvas().style.cursor = '';
      });
    });
  } catch (error) {
    console.error('Failed to load data:', error);
  }
}

loadData();
