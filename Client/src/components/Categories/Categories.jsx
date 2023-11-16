import React from 'react';
import axios from 'axios';
//traeremos mediante una funcion async y con una solicitud Get al back-end usando axios toda las categorias guardadas en la database

export const addProducts = async (product) => {
	try {
		const response = await axios.post('/product', product);
		return response.data;
	} catch (error) {
		console.error('Error al agregar el producto:', error);
		throw error;
	}
};

export const categoryOptions = async () => {
	try {
		const response = await axios.get('/category');
		const data = response.data;
		return data;
	} catch (error) {
		console.error('Error al obtener las categorías:', error);
		return []; // Devuelve un array vacío en caso de error.
	}
};

export const createCategory = async (category) => {
	try {
		const response = await axios.post('/category', {
			description: category.description,
		});
		return response.data;
	} catch (error) {
		console.error('Error al crear la categoría:', error);
		throw error;
	}
};

export const deleteCategory = async (id) => {
	try {
		const response = await axios.delete(`/category/${id.id}`, {
			id: id.id,
		});
		return response.data;
	} catch (error) {
		console.error('Error al crear la categoría:', error);
		throw error;
	}
};
