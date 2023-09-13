import React from 'react'

const Hotelreviews = ({reviews}) => {
  return (
    <div className="hotel-reviews">
    <h3>Reviews:</h3>
    <ul>
      {reviews.map((review, index) => (
        <li key={index}>{review}</li>
      ))}
    </ul>
  </div>
  )
}

export default Hotelreviews;