import React from 'react';
import { Link } from 'react-router-dom';
import data from '../Data.js';

function Cars() {
<<<<<<< Updated upstream
  const cars = data.map((car) => (
    <div className='car-container' key={car.id}>
      <img src={car.img} alt="car" width={300} height={150} />
      <h1>{car.title}</h1>
      <p>Model-2023</p>
      <br />
      <Link to={`/car/${car.id}`}>
        <button>View more</button>
      </Link>
=======
  const showMore=(id)=>{
    const more=data.map((e)=>{
      const{id,title,img,info}=e;
      return(
        <div className="car" key={id}>
          <img src={img} alt={title} />
          <h3>{title}</h3>
          <p>{info}</p>
        </div>
      )
    })
  }
  const car=data.map((e)=>{
    const{id,title,img}=e;
    return(
      <div className='car-container'>
      <img src={img} alt="car" width={300} height={150} />
      <h1>{title}</h1>
      <p>Model-2023</p>
      <br />
      <button onClick={(id)=>showMore(id)}>Details</button>
>>>>>>> Stashed changes
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
