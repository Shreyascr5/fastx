import React from 'react'
import data from ".././Data.js";

function Cars() {
  const car=data.map((e)=>{
    const{id,title,img}=e;
    return(
      <div className='car-container'>
      <img src={img} alt="car" width={300} height={150} />
      <h1>{title}</h1>
      <p>Model-2023</p>
      <br />
      <button>View more</button>
    </div>
    )
  })
  return (
  <>
   <h1 className='car-header'>The greatest supercars</h1>
  
   <div className='car-grid'> {car}</div>
   </>
   
    
  )
}

export default Cars