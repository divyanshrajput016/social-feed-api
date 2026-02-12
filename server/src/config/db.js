const mongoose = require("mongoose")

async function createDB() {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Connected TO DataBase");
}

module.exports = createDB