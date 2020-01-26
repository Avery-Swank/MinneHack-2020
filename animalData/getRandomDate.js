
// Just return their age as a valid description
const getRandomDate = async () => {
    const month = parseInt(Math.random() * 13)
    const day = parseInt(Math.random() * 30)
    const year = 2020
    return "" + month + "/" + day + "/" + year
}

module.exports = {
    getRandomDate
}