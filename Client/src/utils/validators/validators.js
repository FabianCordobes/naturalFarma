// category - brand - therapeuticAction - presentation - stocks - price -

const validators = (form) => {
	const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/;

	let errors = {};

	// CATEORY
	if (!form.category.length) {
		// Si no se ha seleccionado categoria
		errors.category = 'Se debe seleccionar una categoría'; // Establece un mensaje de error que indica que se debe seleccionar al menos un temperamento
	} else {
		errors.category = ''; // No hay error en los temperamentos
	}

	// BRAND
	errors.brand = !form.brand ? 'El nombre es requerido' : (errors.brand = '');

	// THERAPEUTIC ACTION
	errors.therapeuticAction = !form.therapeuticAction
		? 'La acción terapéutica es requerida'
		: !regexName.test(form.therapeuticAction)
		? 'La acción terapéutica debe contener solo letras y espacios'
		: '';

	// PRESENTATION
	errors.presentation = !form.presentation
		? 'La presentación es requerida'
		: !regexName.test(form.presentation)
		? 'La presentación debe contener solo letras y espacios'
		: '';

	// STOCK
	errors.stocks = !form.stocks
		? 'El stock es requerido'
		: isNaN(form.stocks)
		? 'El stock debe ser un número'
		: parseInt(form.stocks) < 0
		? 'El stock no puede ser un número negativo'
		: '';

	// PRICE
	errors.price = !form.price
		? 'El precio es requerido'
		: isNaN(form.price)
		? 'El precio debe ser un número'
		: parseFloat(form.price) <= 0
		? 'El precio debe ser mayor que cero'
		: '';

	return errors; // Devuelve el objeto 'errors' que contiene los mensajes de error
};

export default validators;
