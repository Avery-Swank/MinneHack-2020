
const { getRandomName } = require(`./getRandomName`)
const { getRandomType } = require(`./getRandomType`)
const { getRandomDescription } = require(`./getRandomDescription`)
const { getRandomContact } = require(`./getRandomContact`)
const { getRandomDate } = require(`./getRandomDate`)
const { getRandomUSLatitude } = require(`./getRandomUSLatitude`)
const { getRandomUSLongitude } = require(`./getRandomUSLongitude`)

const getRandomAnimal = async () => {

    const animal = {}

    animal.id = parseInt(Math.random() * 10000)
    animal.petName = await getRandomName()
    animal.ownerFirstName = await getRandomName()
    animal.ownerLastName = await getRandomName()
    animal.animalType = await getRandomType()
    animal.animalDescription = await getRandomDescription()
    animal.contact = await getRandomContact()
    animal.dateLost = await getRandomDate()
    animal.latitude = await getRandomUSLatitude()
    animal.longitude = await getRandomUSLongitude()

    return animal
}

module.exports = {
    getRandomAnimal
}