import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createReview, getProductReviews } from '../../redux/actions/detailActions';

const Reviews = ({ productId }) => {
	//recibe productId como propiedad
	console.log('productId en Reviews:', productId);
	const dispatch = useDispatch();
	const [reviewText, setReviewText] = useState(''); //estado del texto de la reseña
	const [rating, setRating] = useState(0); //estado de la puntuacion de la reseña

	// Obtengo las reviews del producto desde el estado global de Redux
	const productReviews = useSelector((state) => state.detail.reviews);
	console.log('productReviewsAntesDelUseEffect:', productReviews);

	useEffect(() => {
		//cuando el componente se monta
		if (productId) {
			//si hay un productId se despacha la accion para obtener las reviews desde el estado global de redux
			dispatch(getProductReviews(productId));
			console.log('productReviews después de getProductReviews:', productReviews);
		}
	}, [dispatch, productId]);
	//console.log("productReviews:", productReviews);

	const handleReviewSubmit = (e) => {
		e.preventDefault();
		if (!productId) {
			console.error('productId is not defined');
			return;
		}

		// Validate that both review text and rating are provided
		if (!reviewText || rating === 0) {
			alert('Por favor, completa la reseña y asigna una puntuación antes de enviar.');
			return;
		}

		const reviewData = {
			description: reviewText,
			punctuation: rating.toString(), // Convertir a cadena ya que el backend espera un string
			productId: productId,
		};

		// Llamar a la acción de Redux para crear la revisión
		dispatch(createReview(reviewData));
		alert('Reseña enviada con éxito');

		//limpio los campos de texto y puntuacion dsp de enviar la review
		setReviewText('');
		setRating(0);
		console.log('productReviews al final del componente:', productReviews);
	};
	return (
		<div>
			<h2>Reviews</h2>
			<div>
				<form onSubmit={handleReviewSubmit}>
					<label>
						Deja tu reseña:
						<textarea
							value={reviewText}
							onChange={(e) => setReviewText(e.target.value)}></textarea>
					</label>
					<label>
						Puntuacion:
						<input
							type="number"
							min="1"
							max="5"
							value={rating}
							onChange={(e) => setRating(parseInt(e.target.value, 10))}></input>
					</label>
					<button
						type="submit"
						onClick={handleReviewSubmit}>
						Enviar reseña
					</button>
				</form>

				<div>
					<h4>Reseñas anteriores: </h4>
					{productReviews && productReviews.length > 0 ? (
						productReviews.map((product) => (
							<div key={product.id}>
								<h5>Reseñas para {product.brand}</h5>
								{product.Reviews.map((review, index) => (
									<div key={index}>
										<p>Descripción 📝: {review.description}</p>
										<p>Puntuación ⭐: {review.punctuation}</p>
									</div>
								))}
							</div>
						))
					) : (
						<p>No hay reseñas disponibles.</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default Reviews;
