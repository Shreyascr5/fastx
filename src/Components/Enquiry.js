import React from "react";

function Enquiry() {
  return (
    <div className="container">
    <div className="enquiry">
    <h1>Queries</h1>
      <form className="form">
        <input type="text" placeholder="Name" />
        <br />
        <input type="email" placeholder="Email" />
        <br />
        <textarea  placeholder="write to us" />
        <br />
        <button>Submit</button>
      </form>
    </div>
    </div>
  );
}

export default Enquiry;
