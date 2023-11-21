
const axios = require('axios'); 

const apiKey = process.env.APIKEY_OPENWEATHER

const getWeather = async ({lat, lng}) => {
    try {
        const res = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${apiKey}`)
        return res.data.main.temp;
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getWeather };
