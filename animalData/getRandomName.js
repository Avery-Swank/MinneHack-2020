
const names = ["Xuan", "Sabra", "Cristobal", "Fe", "William", "Yolonda", "Mack", "Joie", "Amada", "Coreen", "Deedee", "Melisa", "Charissa", "Lavada", "Jennifer", "Shantelle", "Ezra", "Reinaldo", "Lenna", "Rhonda", "Brittanie", "Linnea", "Whitley", "Evia", "Isaac", "Elisabeth", "Venice", "Hwa", "Angie", "Renate", "Candyce", "Winnifred", "Daren", "Jetta", "Charmaine", "Dorothea", "Harold", "Tiera", "Janeth", "Ashlee", "Somer", "Daron", "Gene", "Phillip", "Winston", "Edmund", "Astrid", "Georgiana", "Trang", "Marc"]

const getRandomName = async () => {
    return names[parseInt(Math.random() * names.length)]
}

module.exports = {
    getRandomName
}