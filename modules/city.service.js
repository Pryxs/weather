
const axios = require('axios');

const apiKey = process.env.APIKEY_NINJA

const getCity = async (city) => {
    try {
        const res = await axios.get(
            `https://api.api-ninjas.com/v1/geocoding?city=${city}`,
            {
                headers: { 
                    'x-api-key': apiKey
                } 
            }
        )
        const  {latitude:lat, longitude:lng } = res.data[0]
        return { lat, lng}
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getCity };
