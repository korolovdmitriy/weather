import { getRefs } from "./getRefs";
import { Skycons } from "./skycons";
const refs = getRefs();
const modifyIcon = {
  'mist': 'WIND',
  'snow': 'SNOW',
  'clear sky': 'CLEAR_DAY',
  'few clouds': 'CLEAR_NIGHT',
  'scattered clouds': 'PARTLY_CLOUDY_DAY',
  'broken clouds': 'PARTLY_CLOUDY_NIGHT',
  'shower rain': 'CLOUDY',
  'rain': 'RAIN',
  'thunderstorm': 'SLEET',  
};

export function setSkycons(icon) {
  const skyDescr = modifyIcon[icon]
  const skycons = new Skycons({"color": 'lightblue'});
  skycons.set(refs.skycons, Skycons[skyDescr]);
  skycons.play();
}


