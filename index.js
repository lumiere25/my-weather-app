const apiKey =  b11697a56d1ac42d60b26df24dbd30bf;
let lat = '145.03369368899746';
let lon ='-37.986387674929524';

const apiCall = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=' +apiKey+'&units=metric';

function fetchWeather() {
  fetch(apiCall)
  .then((response) => response.json())
  .then((data) => console.log(data));
}

fetchWeather();



