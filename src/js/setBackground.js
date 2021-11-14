import { getRefs } from "./getRefs";
const refs = getRefs();
export function setBackground({hits}) {
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const randomImg = randomIntegerFromInterval(0, hits.length - 1);
  refs.body.style = `background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)),
url('${hits[randomImg].largeImageURL}') center fixed; background-size: cover;`
 console.log(hits[randomImg].largeImageURL)
}