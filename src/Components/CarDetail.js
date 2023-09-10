import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../Data.js';
import '../styles/CarDetails.css'

function CarDetail() {
  const { carId } = useParams();
  const selectedCar = data.find((car) => car.id === parseInt(carId));

  if (!selectedCar) {
    return <div>Loading...</div>;
  }

  return (
    <div className="car-detail-container">
    <div className="car-card">
      <img src={selectedCar.img} alt={selectedCar.title} className="car-image" />
    </div>
    <div className="car-info">
      <h2 className="car-title">{selectedCar.title}</h2>
      <p className="car-description">{selectedCar.info}</p>
    </div>
  </div>
  );
}

export default CarDetail;
