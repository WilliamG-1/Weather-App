function createWeatherNode(parentNode, object)
{
    const weatherCard = document.createElement('div');
    weatherCard.classList.add('weatherCard');

    const name = document.createElement('h2');
    const temperature = document.createElement('div');

    const description = document.createElement('h4');
    const unitsButton = document.createElement('button');
    const svgIcon = document.createElement('img');

    name.setAttribute('id', 'cardName');
    temperature.setAttribute('id', 'cardTemperature');
    description.setAttribute('id', 'cardDescription');
    unitsButton.setAttribute('id', 'temperatureUnitsToggle');
    svgIcon.setAttribute('id', 'weatherIcon');

    let locationTemperature = Temperature(object.temperature);
    // Object attributes: object.name, object.temperature, object.weatherDescription
    name.textContent = object.name;
    description.textContent = object.weatherDescription;
    temperature.textContent = locationTemperature.getTemperatureString(); // Set temperature string
    unitsButton.textContent = "C°";
    svgIcon.src = './assets/cloudyA.svg';

    unitsButton.addEventListener('click', ()=> {
        unitsButton.classList.toggle('farenheit');
        locationTemperature.changeTemperature();

        temperature.textContent = locationTemperature.getTemperatureString(); // Change temperature string

        unitsButton.textContent = locationTemperature.isCelsius() ? "C°" : "F°";
    });

    weatherCard.appendChild(name);
    weatherCard.appendChild(temperature);
    weatherCard.appendChild(svgIcon);
    weatherCard.appendChild(description);
    weatherCard.appendChild(unitsButton);

    parentNode.appendChild(weatherCard);
}

const Temperature = (kelvinTemp) => {
    const _celsiusTemperature = Math.floor(kelvinTemp - 273);
    const _farenheitTemperature = Math.floor( (_celsiusTemperature * 1.8) + 32);
    let _isCelsus = true;

    const changeTemperature = () => { _isCelsus = !_isCelsus; }
    const getTemperatureValue = () => { return _isCelsus ? _celsiusTemperature : _farenheitTemperature };
    const getTemperatureString = () => { return _isCelsus ? `${_celsiusTemperature}°` : `${_farenheitTemperature}°` };;
    const isCelsius = () => { return _isCelsus };

    return { changeTemperature, getTemperatureValue, getTemperatureString, isCelsius };
}



export default createWeatherNode;