import React from 'react'
import axios from 'axios'
//traeremos mediante una funcion async y con una solicitud Get al back-end usando axios toda las categorias guardadas en la database

export const addProducts = async (product)=>{
	try {
		const response = await axios.post('http://localhost:3001/product', product)
		console.log("que verg" + JSON.stringify(response.data))
		return response.data;
	} catch (error) {
		console.error('Error al agregar el producto:', error);
		throw error;
	
		
	}
}

export const categoryOptions = async () => {
	try {
	  const response = await axios.get('http://localhost:3001/category');
	  const data = response.data;
	  console.log("esta es la data" + JSON.stringify(data))
	  return data;
	} catch (error) {
	  console.error('Error al obtener las categorías:', error);
	  return []; // Devuelve un array vacío en caso de error.
	}
  };

  export const createCategory = async (category) => {
	console.log("este es el parametro category"+JSON.stringify(category))
	try {
	  const response = await axios.post('http://localhost:3001/category', {
		description: category.description,
	  });
	  console.log("este es el response"+JSON.stringify(response))
	  return response.data;
	} catch (error) {
	  console.error('Error al crear la categoría:', error);
	  throw error;
	}
  };