const axios = require('axios');
const { User } = require('../db');
const { Op, where } = require('sequelize');

const createUserController = async (
	name,
	lastName,
	birthdate,
	nationality,
	password,
	email
) => {
	const newUser = await User.create({
		name,
		lastName,
		birthdate,
		nationality,
		password,
		email,
	});

	return newUser;
};

const deleteUserController = async (id) => await User.destroy({ where: { id } });

// Esta funcion nos trae los user que tengan una fecha de borrado
const getUserDeleteController = async (id) => {
	const deletedUsers = await User.findAll({
		where: {
			deletedAt: {
				[Op.not]: null, // Filtra usuarios con deletedAt no nulo (usuarios eliminados)
			},
		},
		paranoid: false, // Incluye registros eliminados en la consulta
	});

	return deletedUsers;
};

const getAllUserControllers = async () => {
	const allUserDb = await User.findAll();
	return allUserDb;
};

const restoreUserController = async (id) => {
	try {
		await User.restore({
			where: { id: id },
		});
	} catch (error) {
		throw new Error(error.message);
	}
};

const putUserController = async (
	id,
	name,
	lastName,
	birthdate,
	nationality,
	password,
	email
) => {
	try {
		const user = await User.findByPk(id);

		if (!user) {
			throw new Error('El Usuario no se encontró.');
		}

		name ? (user.name = name) : (user.name = user.name);

		lastName ? (user.lastName = lastName) : (user.lastName = user.lastName);

		birthdate ? (user.birthdate = birthdate) : (user.birthdate = user.birthdate);

		nationality
			? (user.nationality = nationality)
			: (user.nationality = user.nationality);

		password ? (user.password = password) : (user.password = user.password);

		email ? (user.email = email) : (user.email = user.email);

		await user.save();

		return user;
	} catch (error) {
		throw new Error(`Error al actualizar el Usuario: ${error.message}`);
	}
};

const getUserByIdController = async (id) => {
	const USerFilter = await User.findAll({ where: { id } });

	return USerFilter;
};
module.exports = {
	createUserController,
	deleteUserController,
	getUserDeleteController,
	getAllUserControllers,
	restoreUserController,
	putUserController,
	getUserByIdController,
};
