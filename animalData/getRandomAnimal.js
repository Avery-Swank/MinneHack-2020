
const { getRandomName } = require(`./getRandomName`)
const { getRandomType } = require(`./getRandomType`)
const { getRandomDescription } = require(`./getRandomDescription`)
const { getRandomDate } = require(`./getRandomDate`)
const { getRandomCity } = require(`./getRandomCity`)
const { getRandomUSLatitude } = require(`./getRandomUSLatitude`)
const { getRandomUSLongitude } = require(`./getRandomUSLongitude`)

const getRandomAnimal = async () => {

    const animal = {}

    animal.id = parseInt(Math.random() * 10000)
    animal.name = await getRandomName()
    animal.animalType = await getRandomType()
    animal.animalDescription = await getRandomDescription()
    animal.dateLost = await getRandomDate()
    animal.cityList = await getRandomCity()
    animal.latitude = await getRandomUSLatitude()
    animal.longitude = await getRandomUSLongitude()

    return animal
}

module.exports = {
    getRandomAnimal
}