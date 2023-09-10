import React from 'react';
import { useParams } from 'react-router-dom';

function CarDetail() {
  const { carId } = useParams();
  return (
    <div>
      <h2>Car Details for Car ID: {carId}</h2>
    </div>
  );
}

export default CarDetail;
