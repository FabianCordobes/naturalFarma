import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createReview, getProductReviews } from '../../redux/actions/detailActions';
import { FaStar } from 'react-icons/fa';
import './Reviews.css';

const Reviews = ({ productId }) => {
  const dispatch = useDispatch();
  const [showReviews, setShowReviews] = useState(false);
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const productReviews = useSelector((state) => state.detail.reviews);

  useEffect(() => {
    if (productId) {
      dispatch(getProductReviews(productId));
    }
  }, [dispatch, productId]);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    if (!productId) {
      console.error('productId is not defined');
      return;
    }

    if (!reviewText || rating === 0) {
      alert('Por favor, completa la reseña y asigna una puntuación antes de enviar.');
      return;
    }

    const reviewData = {
      description: reviewText,
      punctuation: rating.toString(),
      productId: productId,
    };

    await dispatch(createReview(reviewData));

    // Después de enviar la reseña, actualiza las reviews del producto
    dispatch(getProductReviews(productId));

    alert('Reseña enviada con éxito');

    setReviewText('');
    setRating(0);
  };

  return (
    <div className='reviews-container'>
      <h2>Reviews:</h2>
      <div className='reviews-stars'>
        {[1, 2, 3, 4, 5].map((index) => (
          <FaStar
            key={index}
            size={24}
            style={{
              marginRight: 10,
              cursor: 'pointer',
            }}
            color={rating >= index ? '#FFBA5A' : '#a9a9a9'}
            onClick={() => setRating(index)}
          />
        ))}
      </div>
      <textarea
        placeholder='Deja un comentario'
        className='reviews-textarea'
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
      />
      <button className='reviews-button' onClick={handleReviewSubmit}>
        Enviar
      </button>
      <button className='reviews-button' onClick={() => setShowReviews(!showReviews)}>
        {showReviews ? 'Ocultar Reseñas' : 'Ver Reseñas'}
      </button>
      {showReviews && (
        <div className='reviews-table-container'>
          <h4>Reseñas anteriores:</h4>
          <ul className='reviews-list'>
            {productReviews && productReviews.length > 0 ? (
              productReviews.map((product) => (
                <div key={product.id}>
                  <h5>Reseñas para {product.brand}</h5>
                  {product.Reviews && product.Reviews.map((review, index) => (
                    <li key={index}>
                      <p>Descripción 📝: {review.description}</p>
                      <p>Puntuación ⭐: {Array(parseInt(review.punctuation, 10)).fill('⭐').join(' ')}</p>
                    </li>
                  ))}
                </div>
              ))
            ) : (
              <p>No hay reseñas disponibles.</p>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Reviews;
