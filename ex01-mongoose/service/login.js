const user = require('../model/user')

const login = async (email, password) => {
    try {
       
        var existed = await user.findOne({email})
        if(!existed){
            throw "Email is incorrected."
        } 
        if(existed.password != password){
            throw "Password is incorrected."
        }
        return {
            success: true,
            data: existed
        }
    } catch (err) {
        return {
            success: false,
            err: err
        }
    }
}
module.exports = {
    login
}