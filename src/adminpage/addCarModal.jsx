import React, { useState } from "react";
import "./adminCarStyle.css";

const AddCarModal = ({ setShowModal }) => {
  const [formData, setFormData] = useState({
    company: "",
    model: "",
    year: new Date().getFullYear(),
    price: "",
    engineName: "",
    fuelType: "",
    transmission: "",
    enginePower: "",
    horsePower: "",
    topSpeed: "",
    fuelEconomy: "",
    emissions: "",
    image: null, 
  });

  const [imagePreview, setImagePreview] = useState(null); 
  const currentYear = new Date().getFullYear();
  //Here gets the year up to today
  const years = Array.from({ length: currentYear - 1900 + 1 }, (_, i) => currentYear - i);

  const handleChange = (e) => {
    let { name, value } = e.target;

    
    if (["price", "year", "enginePower", "horsePower", "topSpeed", "fuelEconomy", "emissions"].includes(name)) {
      value = Math.abs(value); 
    }

    // Price as whole numbers
    if (name === "price") {
      value = Math.round(value); 
    }

    setFormData({ ...formData, [name]: value });
  };

  // Uploading car image 
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setImagePreview(URL.createObjectURL(file)); 
    }
  };

  // Submit the new car
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Car Data Submitted:", formData);
    setShowModal(false); 
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Add New Car</h3>
        <form onSubmit={handleSubmit} className="car-form">
          <div className="form-group">
            <label>Car Company</label>
            <input type="text" name="company" value={formData.company} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Car Model</label>
            <input type="text" name="model" value={formData.model} onChange={handleChange} required />
          </div>

          <div className="form-group">
          <label>Year</label>
            <select name="year" value={formData.year} onChange={handleChange} required>
              {years.map((yr) => (
                <option key={yr} value={yr}>
                  {yr}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Price (USD)</label>
            <input type="number" name="price" value={formData.price} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Engine Name</label>
            <input type="text" name="engineName" value={formData.engineName} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Fuel Type</label>
            <select name="fuelType" value={formData.fuelType} onChange={handleChange} required>
              <option value="">Select Fuel Type</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          <div className="form-group">
            <label>Transmission Type</label>
            <select name="transmission" value={formData.transmission} onChange={handleChange} required>
              <option value="">Select Transmission</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
            </select>
          </div>

          <div className="form-group">
            <label>Engine Power (cc)</label>
            <input type="number" name="enginePower" value={formData.enginePower} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Horsepower (HP)</label>
            <input type="number" name="horsePower" value={formData.horsePower} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Top Speed (km/h)</label>
            <input type="number" name="topSpeed" value={formData.topSpeed} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Fuel Economy (km/l)</label>
            <input type="number" name="fuelEconomy" value={formData.fuelEconomy} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Emissions (g/km)</label>
            <input type="number" name="emissions" value={formData.emissions} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Car Image</label>
            <input type="file" accept="image/*" onChange={handleImageChange} required />
          </div>

          {imagePreview && (
            <div className="image-preview">
              <img src={imagePreview} alt="Car Preview" className="preview-img" />
            </div>
          )}

          <button type="submit" className="btn btn-success">Save Car</button>
          <button type="button" className="btn btn-danger" onClick={() => setShowModal(false)}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default AddCarModal;
