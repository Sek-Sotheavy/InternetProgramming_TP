const mongoose = require('mongoose')

module.exports = async () =>{
    try{
        await mongoose.connect('mongodb://localhost:27017/tp09',{
         autoIndex: true,
         serverSelectionTimeoutMS: 3000
        })
        console.log("Mongo connectes");
    } catch (err) {
        console.log("Monoose: ",err);
    }
}