import { getWeather } from './weather';

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
    const long = position.coords.longitude;
    console.log(long);
    const lat = position.coords.latitude;
    getWeather(lat, long).then(console.log);
  });
}

// return {
//   lat: 37.773972,
//   long: -122.431297,
// };
