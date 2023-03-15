import './style.css';
import getLocationWeatherInformation from './generateWeather';


const test = document.createElement('div');
test.textContent = "This is an up and coming weather app lol";

document.body.appendChild(test);

const test2 = document.createElement('div');
document.body.appendChild(test2);

getLocationWeatherInformation('London');


