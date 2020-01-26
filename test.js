
const { getRandomAnimal } = require(`./animalData/getRandomAnimal`)

const run = (async () => {

    const animalTest = await getRandomAnimal()

    console.log(animalTest)
})()

Promise.all([run])