
// Return a random phone number
const getRandomContact = async () => {
    const areaCode = parseInt(Math.random() * 1000)
    const firstThree = parseInt(Math.random() * 1000)
    const lastFour = parseInt(Math.random() * 10000)
    return "(" + areaCode + ")-" + firstThree + "-" + lastFour
}

module.exports = {
    getRandomContact
}