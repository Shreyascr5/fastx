import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div className="navbar">
            <h1>FastX'</h1>
            <ul className=" link">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/cars">Cars</Link></li>
                <li><Link to="/enquiry">Enquiry</Link></li>
                
            </ul>
        </div>
    )
}