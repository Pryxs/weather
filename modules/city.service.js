
const axios = require('axios');

const getCity = async (lat, lng) => {
    try {
        const res = await axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
        return res.data.city
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getCity };
