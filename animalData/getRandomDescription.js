
// Just return their age as a valid description
const getRandomDescription = async () => {
    const yearsOld = parseInt(Math.random() * 20)
    return "" + yearsOld + " years old"
}

module.exports = {
    getRandomDescription
}