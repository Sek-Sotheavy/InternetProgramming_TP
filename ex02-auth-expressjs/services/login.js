const users = require('../models/user')
const {decryptData} = require('../config/encrypt')

const login = async (email, password) => {
    try {
        
        var existed = await users.findOne({email})
        if(!existed){
            throw "Email is incorrected."
        } 
        if(!decryptData(password,existed.password)){
            throw "Password is incorrected."
        }
        return {
            success: true,
            data: existed
        }
    } catch (err) {
        return {
            success: false,
            error: err || 'error'
        }
    }
}

module.exports = {
    login
}