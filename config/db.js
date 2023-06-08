const mongoose = require("mongoose")

module.exports = async() =>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/tp10', {
            autoIndex: true,
            serverSelectionTimeoutMS: 30000
        })
        console.log("MongoDB Connected")
    } catch (error) {
        console.log(error);
        
    }
}
