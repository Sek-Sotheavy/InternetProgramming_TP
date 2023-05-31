const user = require('../model/user')

const register = async (params) => {
    
    try{
        const {email, username, firstname, lastname, password } = params;
        const existed = await user.findOne({ email });
        if(existed){
            throw "Email is already used";
        }
        const newUser = {
            email,
            username,
            firstname,
            lastname,
            password
        }

        const createdUser = await user.create(newUser);
        return createdUser
    }catch(err){
        return {
            success: false,
            err: err || 'error'
        }
    }
}
module.exports = {
    register
}