import { getWeather } from './weather';
import { markupWeather } from './markupWeather';
import {getPositionName} from "./getPositionName";
import { getImg } from './getImg';
import { setBackground } from './setBackground';

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
    const long = position.coords.longitude;
    // console.log(long);
    const lat = position.coords.latitude;
    getWeather(lat, long).then(markupWeather).catch(console.error);
    getPositionName(lat, long).then(getImg).then(setBackground)
  });
}


// return {
//   lat: 37.773972,
//   long: -122.431297,
// };
