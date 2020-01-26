
// Return Longitude West: [70, 125]
const getRandomUSLongitude = async () => {
    const lon = (Math.random() * 55) + 70
    return "" + lon
}

module.exports = {
    getRandomUSLongitude
}