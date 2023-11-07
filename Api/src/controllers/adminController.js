const { Admin } = require(".././db");
const { Op, where } = require('sequelize');


const createAdminController = async (
            email,
            password,
            name,
            lastName,
            birthdate,
            nationality,
            isAdmin,
)=>{
const newAdmin = await Admin.create({
            email,
            password,
            name,
            lastName,
            birthdate,
            nationality,
            isAdmin,
});     
  return newAdmin
}

const deleteAdminController = async(id) => await Admin.destroy({where: {id}});


const getAllAdminControllers = async () => {
  const allAdminDb = await Admin.findAll();
  return allAdminDb;
};

module.exports = { 
  createAdminController,
  deleteAdminController,
  getAllAdminControllers,
 }