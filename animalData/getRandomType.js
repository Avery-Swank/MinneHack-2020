
const types = ["Bearded Dragon", "Bird", "Burro", "Cat", "Chameleon", "Chicken", "Chinchilla", "Chinese Water Dragon", "Cow", "Dog", "Donkey", "Duck", "Ferret", "Fish", "Gecko", "Geese (Chinese Swan Goose)", "Gerbil", "Goat", "Guinea Fowl", "Guinea Pig", "Hamster", "Hedgehog", "Horse", "Iguana", "Llama", "Lizard", "Mice", "Mule", "Peafowl", "Pigs and Hog", "Pigeon", "Ponie", "Pot Bellied Pig", "Rabbit", "Rat", "Sheep", "Skink", "Snake", "Stick Insect", "Sugar Glider", "Tarantula", "Turkey", "Turtle"]

const getRandomType = async () => {
    return types[parseInt(Math.random() * types.length)]
}

module.exports = {
    getRandomType
}