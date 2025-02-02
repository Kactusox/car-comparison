import React from 'react';
import styles from './style/cardetails.module.css';
import carImage from './img/12 2.png'; // replace with your actual image path

const CarDetails = () => {
  return (
    <div className={styles['car-details-container']}>
      <div className="car-image-wrapper">
        <img src={carImage} alt="Hyundai Sonata Hybrid" className={styles['car-image']} />
      </div>
      <h2 className={styles['car-name']}>Hyundai Sonata Hybrid</h2>

      <table className={styles['car-specs-table']}>
        <tbody>
          <tr>
            <td>Base Price:</td>
            <td>$ 40,000</td>
          </tr>
          <tr>
            <td>Engine Name:</td>
            <td>50 TDI Quattro Tip Tronic</td>
          </tr>
          <tr>
            <td>Fuel:</td>
            <td>Diesel</td>
          </tr>
          <tr>
            <td>Transmission:</td>
            <td>Automatic</td>
          </tr>
          <tr>
            <td>Engine Power:</td>
            <td>210 KW</td>
          </tr>
          <tr>
            <td>HP:</td>
            <td>286 Hp</td>
          </tr>
          <tr>
            <td>Top Speed:</td>
            <td>155 Mph</td>
          </tr>
          <tr>
            <td>Fuel Economy:</td>
            <td>155 Mph</td>
          </tr>
          <tr>
            <td>Emissions:</td>
            <td>194 g CO2/Km</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CarDetails;
