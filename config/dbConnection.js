const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL
const connectToDatabase =  () => {
     mongoose.connect(DB_URL)
    .then((con) => {
        console.log(`Database Connected Successfully `)
    }).catch((err) => {
        console.log("Error While Connecting to DB", err.message)
    })
}

module.exports = { connectToDatabase };