const express = require('express');
const router = express.Router();
const User = require('../models/user');
const {v4: uuidv4} = require('uuid');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const tokenOptions = {
    expiresIn: "1d",
    algorithm: 'HS256',
    issuer: 'localhost', //tokeni oluşturan kişi
}

router.post('/register', async(req,res) =>{
    try {
        const user = new User(req.body);
        user.password = bcrypt.hashSync(user.password, 8); //8: hashleme işlemi için kullanılan salt değeri
        user._id = uuidv4();
        user.createdDate = new Date();
        user.isAdmin = false;
        
        const checkUserEmail= await User.findOne({email:user.email})
        if(checkUserEmail !=null){ 
            res.status(403).send({message:"This email is already in use."});
        }
        else{
            await user.save();
            const token = jwt.sign({id:user._id}, process.env.SECRET_KEY, tokenOptions);
            let json = {user:user,token:token};
            res.status(200).json(json); //200: OK
        }
    } catch (error) {
        res.status(500).send({message:error.message});
    }
    
});

router.post("/login",async (req,res)=>{
    try {
        const {email, password} = req.body;

        let user = await User.findOne({email: email});
        if(user == null){
            res.status(403).json({message: "User not found!"});
        }else{
            if(!bcrypt.compareSync(password, user.password)){
                res.status(403).json({message: "Invalid password!"});
            }else{
                const token = jwt.sign({},process.env.SECRET_KEY,tokenOptions);
                let model = {token: token, user: user};
                res.json(model);
            }
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

module.exports = {
    auth:router  //auth.router.js içerisindeki tüm fonksiyonları dışarıya açar
};