
import React, { useState } from 'react';
import Hotelreviews from '../hotelreviews/hotelreviews';
import Notification from '../notification/notification';
import "./card.css";
const HotelCard = ({ hotel, onSelect }) => {
  const [expanded, setExpanded] = useState(false);
  const [bookingConfirmation, setBookingConfirmation] = useState(false);

  const Expand = () => {
    setExpanded(!expanded);
  };

  const BookNow = () => {
    setBookingConfirmation(true);
  };

  return (
    <div className="card mt-5"  >
    <div  className='hotels'><img src={hotel.image} className='card-img-top'/></div>
    {/* <Carousel autoPlay={true} interval={5000} infiniteLoop={true}>
    <div>
          <img src={hotel.image} className='card-img-top' alt={`Hotel ${hotel.name}`} />
        </div>
      </Carousel> */}
      <h5>{hotel.name}</h5>
      <h4>City: {hotel.city}</h4>
      <p>Star: {hotel.star}</p>
      <div className="rating">Rating:{hotel.rating}</div>
      <button className ="btn btn-outline-success"onClick={BookNow}>Book Now</button>
      {bookingConfirmation && (
        <Notification  message="Your booking has been confirmed." />
      )}
      <div className="image-slider">

      </div>
      <button onClick={Expand}>
        {expanded ? 'Hide Reviews' : 'Show Reviews'}
      </button>
      {expanded && <Hotelreviews reviews={hotel.reviews} />}
    </div>
  );
};

export default HotelCard;
