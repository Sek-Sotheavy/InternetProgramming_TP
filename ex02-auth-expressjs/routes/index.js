//for use route
var express = require('express');
var router = express.Router();

const { login } = require('../services/login');
const { register } = require('../services/register');
const  {joiValidation}  = require('../middleware/joiValidation')
const { loginSchema, registerSchema } = require('../Schema/index');

//home page 
router.get('/', function(req,res,next) {
    console.log("router up");
    res.send("Hello, this is API");
});
//login page
router.post('/login', joiValidation(loginSchema) , async (req,res,next)=>{
    const {email, password} = req.body;
    const result = await login(email, password);
    res.json(result);
});
//register page
router.post('/register', joiValidation(registerSchema) , async (req,res,next)=> {
    const createdUser = await register(req.body);
    res.json(createdUser);
});

module.exports = router;