
const axios = require('axios'); 

const getWeather = async (city) => {
    try {
        const res = await axios.get(`http://api.weatherapi.com/v1/current.json?key=c60e0bdfd1db473ca33162055232011&q=${city}`)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getWeather };
