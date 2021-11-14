import { getRefs } from "./getRefs";
import { Skycons } from "./skycons";
const refs = getRefs();
const modifyIcon = {
  "mist": "WIND",
  "snow": "SNOW",
  "clear sky": "CLEAR_DAY"
};
export function setSkycons(icon) {
  const skyDescr = modifyIcon[icon]
  const skycons = new Skycons({"color": 'lightblue'});
  skycons.set(refs.skycons, Skycons[skyDescr]);
  skycons.play();

}

//'clear sky', 'few clouds','scattered clouds',"broken clouds","shower rain",'rain','thunderstorm','snow','mist'
//clear-day,clear-night,partly-cloudy-day,partly-cloudy-night,cloudy,rain,sleet,snow,wind,fog
