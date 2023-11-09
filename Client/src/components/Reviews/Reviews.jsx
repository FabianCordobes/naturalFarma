import { useState } from 'react'

const Reviews = () => {
  const [reviews, setReviews] = useState([]) //estado de las reviews
  const [reviewText, setReviewText] = useState('') //estado del texto de la reseña
  const [rating, setRating] = useState(0) //estado de la puntuacion de la sereña

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      text: reviewText,
      rating: rating
    }
    
    setReviews([...reviews, newReview]) //agregar la nueva review al estado
    ;
    //limpio los campos de texto y puntuacion dsp de enviar la review
    setReviewText('');
    setRating(0)

  }
  return (
    <div> 
      <h2>Reviews</h2>
      <div>
        <form onSubmit={handleReviewSubmit}>
          <label>Deja tu reseña: 
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}>
            </textarea>
            </label>
          <label>Puntuacion: 
            <input
            type='number'
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value, 10))}
            >
          </input>
          </label>
          <button type="submit">Enviar reseña</button>
        </form>

        <div>
          <h4>Reseñas anteriores: </h4>
        </div>
      </div>
    </div>
  )
}

export default Reviews;