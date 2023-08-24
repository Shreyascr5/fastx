import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='error'>
      <h1>Error <br />page not found!</h1><br/>
      
      <button ><Link to="/">Go back to home</Link></button>
    </div>
  )
}

export default Error