import React from 'react';
import { Link } from 'react-router-dom';
import data from '../Data.js';

function Cars() {
  const cars = data.map((car) => (
    <div className='car-container' key={car.id}>
      <img src={car.img} alt="car" width={300} height={150} />
      <h1>{car.title}</h1>
      <p>Model-2023</p>
      <br />
      <Link to={`/car/${car.id}`}>
        <button>View more</button>
      </Link>
    </div>
  ));

  return (
    <>
      <h1 className='car-header'>The greatest supercars</h1>
      <div className='car-grid'>{cars}</div>
    </>
  );
}

export default Cars;
