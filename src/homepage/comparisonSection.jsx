import React from "react";
import '../style/mainPage.css'
import { useNavigate } from 'react-router-dom';
import car1 from '../img/car1.png'
import car2 from '../img/car2.png' 
import logo from '../img/Car.png'



function CompareHeader() {
  return (
    <div className='compareHeader'>
      <div className='textHeader'>
        <h3>Compare Cars</h3>
        <p>Choose Two Cars To Compare Side-By-Side</p>
      </div>
      <img src={logo} alt="car header logo"/>
    </div>
  );
}

function CarForm({ title, imageUrl }) {


  return (
    <div className="car-form-card">
      <div className="image-container">
        <img src={imageUrl} alt="Car" className="car-image" />
      </div>

      <h2 className="form-title">{title}</h2>

      <form className="car-form">
        <div className="form-group">
          <label htmlFor="make">Make</label>
          <select id="make" className="form-control">
            <option>Choose a company</option>
            <option>Audi</option>
            <option>Chevrolet</option>
            <option>BMW</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="model">Model</label>
          <select id="model" className="form-control">
            <option>Choose a model</option>
            <option>R8</option>
            <option>Camaro</option>
            <option>M3</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="year">Year</label>
          <select id="year" className="form-control">
            <option>Choose a year</option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
          </select>
        </div>
      </form>
    </div>
  );
}

function CompareCars() {
  const navigate = useNavigate();

  const handleCompareBtn = () => {
    navigate('/pages'); 
  };

  return (
    <>
      <CompareHeader />
      
      <div className="compare-cars-container">
        <CarForm 
          title="Add First Car"  /* first car */
          imageUrl= {car1} alt="First Car"
        />

        <CarForm 
          title="Add Second Car"  /* second car */
          imageUrl={car2} alt="Second car"
        />
      </div>

      <button className='compareBtn' onClick={handleCompareBtn}>Compare</button>
    </>
  );
}

export default CompareCars;

