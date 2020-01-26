
const { getRandomAnimal } = require(`./animalData/getRandomAnimal`)

const run = (async () => {

    for(var i = 0; i < 10; i++){
        const animalTest = await getRandomAnimal()
        console.log(animalTest)
    }
})()

Promise.all([run])