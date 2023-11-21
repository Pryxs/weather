require('dotenv').config()

const city = require("./modules/city.service");
const weather = require("./modules/weather.service");

const cityName = process.argv[2]

if (cityName) {
    city.getCity(cityName)
        .then(coord => weather.getWeather(coord))
        .then(res => console.log(res))
} else {
    console.log('undefined params')
    process.exit(1)
}
