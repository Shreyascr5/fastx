import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Enquiry from "./Components/Enquiry";
import Cars from "./Components/Cars";
import CarDetail from "./Components/CarDetail"; 
import Error from "./Components/Error";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/car/:carId" element={<CarDetail />} /> 
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
