
// Return Latitude North: [25, 50]
const getRandomUSLatitude = async () => {
    const lat = (Math.random() * 25) + 25
    return "" + lat
}

module.exports = {
    getRandomUSLatitude
}