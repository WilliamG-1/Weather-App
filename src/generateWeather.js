import createWeatherNode from "./infoAppender";
const content = document.querySelector('#content');
const APIKEY = 'ae6cff0c5dec4b33010703d6fac46a44';

const Location = (name, temperature, weatherDescription) => {
    return {name, temperature, weatherDescription};
};

async function getLocationResponse(location)
{
    const apiRequest = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${APIKEY}`;
    const promise = await fetch(apiRequest, {mode: 'cors'});
    const response = await promise.json();
    return response;
}

function getLocationWeatherInformation(location, node)
{
    (async () => {
        const p = await getLocationResponse(location);
        const newLocation = Location(p.name, p.main.temp, p.weather[0].description);
        createWeatherNode(node, newLocation);
    })();  
}

export default getLocationWeatherInformation;

