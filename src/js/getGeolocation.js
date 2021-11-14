import { getWeather } from './weather';
import { markupWeather } from './markupWeather';

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
    const long = position.coords.longitude;
    // console.log(long);
    const lat = position.coords.latitude;
    getWeather(lat, long).then(markupWeather).catch(console.error);
  });
}


// return {
//   lat: 37.773972,
//   long: -122.431297,
// };
