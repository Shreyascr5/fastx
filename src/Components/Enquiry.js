import React from "react";

function Enquiry() {
  return (
    <div className="form">
    <h1>Queries</h1>
      <form>
        <input type="text" placeholder="Name" />
        <br />
        <input type="email" placeholder="Email" />
        <br />
        <textarea  cols="30" rows="10" />
      </form>
    </div>
  );
}

export default Enquiry;
