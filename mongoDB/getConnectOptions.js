
const getConnectOptions = async () => {
    return { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    }
}

module.exports = {
    getConnectOptions
}