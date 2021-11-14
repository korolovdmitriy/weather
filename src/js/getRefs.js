export function getRefs() {
    return {
        body: document.querySelector('body'),
        tempetatureDegree: document.querySelector('.temperature-degree'),
        timeZone: document.querySelector('.location-timezone'),
        decs: document.querySelector('.temperature-description'),
        icon: document.querySelector('.icon'),
        skycons: document.querySelector("#icon1"),
    }
}