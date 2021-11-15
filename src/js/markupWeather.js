import { getRefs } from "./getRefs";
import { setSkycons } from "./setSkycons";
const refs = getRefs();

export function markupWeather({ name, weather, main }) {
    
    refs.tempetatureDegree.textContent = Math.round(main.temp);
    refs.timeZone.textContent = name;
    refs.decs.textContent = weather[0].main;
    refs.icon.src = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png` 
    setSkycons(weather[0].description)
}

