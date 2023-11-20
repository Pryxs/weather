const city = require("./modules/city.service");
const weather = require("./modules/weather.service");

const lat = process.argv[2]
const lng = process.argv[3]

if(lat && lng) {
    city.getCity(lat, lng)
        .then(city => weather.getWeather(city))
        .then(res => {
            const { country, name: city } = res.location;
            const { temp_c: temperature, humidity, cloud } = res.current;

            const results = {
                city,
                country,
                temperature,
                humidity,
                cloud,
            }

            console.log(results)
        })
} else {
    console.log('undefined params')
}
