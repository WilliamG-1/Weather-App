import './style.css';
import getLocationWeatherInformation from './generateWeather';


const mainWeatherInfo = document.querySelector('#mainWeather');

getLocationWeatherInformation('London', mainWeatherInfo);


