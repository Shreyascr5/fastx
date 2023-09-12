import React from 'react'
import data from '../CarData';

function Home() {
  const allCars=data.map((c)=>(
    <div className='car-container' key={c.id}>
      <img src={c.img} alt="car" width={300} height={150} />
      <h1>{c.title}</h1>
      <p>Year- {c.year}</p>
      <br />
      {/* <Link to={`/car/${car.id}`}> */}
        <button>View more</button>
      {/* </Link> */}
      </div>
  ))
    
  
  return (
    <div className='home-grid'>
      {allCars}
    </div>
  )
  }

export default Home