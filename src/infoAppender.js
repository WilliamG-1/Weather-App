function createWeatherNode(parentNode, object)
{
    const weatherCard = document.createElement('div');
    weatherCard.classList.add('weatherCard');

    const name = document.createElement('h2');
    const temperature = document.createElement('div');
    const description = document.createElement('h4');
    name.textContent = object.name;
    temperature.textContent = object.temperature;
    description.textContent = object.weatherDescription;

    weatherCard.appendChild(name);
    weatherCard.appendChild(temperature);
    weatherCard.appendChild(description);

    parentNode.appendChild(weatherCard);
}

export default createWeatherNode;