const axios = require ("axios");
const {User} = require ("../db");
const { Op, where } = require('sequelize');


const createUserController = async (
            name,
            lastName,
            birthdate,
            review,
            nationality
    )=>{
const newUser = await User.create({
            name,
            lastName,
            birthdate,
            review,
            nationality
});          

return newUser;
};

module.exports = {
    createUserController,
}