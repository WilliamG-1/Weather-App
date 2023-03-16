import './style.css';
import getLocationWeatherInformation from './generateWeather';
import s from './assets/search.svg';

const mainWeatherInfo = document.querySelector('#mainWeather');
const searchButton = document.querySelector('#searchButton');
const searchBar = document.querySelector('#searchBar');
const form = document.querySelector('form');
getLocationWeatherInformation('London', mainWeatherInfo);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    resetWeatherCard();
    const location = searchBar.value;
    searchBar.value = '';
    console.log(location);
    getLocationWeatherInformation(location, mainWeatherInfo);
    
});

function resetWeatherCard()
{
    while (mainWeatherInfo.hasChildNodes())
    {
        mainWeatherInfo.removeChild(mainWeatherInfo.lastChild);
    }
}

