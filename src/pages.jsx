// src/Pages.js
import React from 'react';
import cars1 from './img/Mits 1.png';
import cars2 from './img/12 2.png';
import { useNavigate } from 'react-router-dom';

function Pages() {

  const navigate = useNavigate();


  const handleComapreOtherBtn = () => {
    navigate('/')
};

  return (
    <div className='Pages'>
      <div className='contener'>
        {/* Result Box*/}
        <div className='result'>
          <div className='result-text'>Result</div>
        </div>

        {/* Car Images and Names*/}
        <main className='img-main'>
          <div className='img-main-car'>
            <img src={cars1} alt="car" />
            <img src={cars2} alt="car" />
          </div>
          <div className='main-car-name'>
            <h3>Mitsubishi Attrage</h3>
            <h3 className='car-name'>Hyundai Sonata Hybrid</h3>
          </div>
          <div className='company'>
            <p className='car-company'>Mitsubishi, 2022</p>
            <p className='car-company'>Hyundai, 2022</p>
          </div>
        </main>

        <main className='table-main'>
  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '80px', width: '100%' }}>
      
      {/* Left Side table */}

    <table style={{ width: '48%', borderCollapse: 'collapse' }}>
      <tbody>
        <tr>
          <td style={{ textAlign: 'left', paddingTop: '45px', paddingBottom: '8px', borderBottom: '1px solid #ccc' }}>Best Price:</td>
          <td style={{ textAlign: 'right', paddingTop: '45px', paddingBottom: '8px', borderBottom: '1px solid #ccc' }}>$40,000</td>
        </tr>
        <tr>
          <td style={{ textAlign: 'left', paddingTop: '45px', paddingBottom: '8px', borderBottom: '1px solid #ccc' }}>Engine Name</td>
          <td style={{ textAlign: 'right', paddingTop: '45px', paddingBottom: '8px', borderBottom: '1px solid #ccc' }}>50 TDI Quattro Tip Tronic</td>
        </tr>
        <tr>
          <td style={{ textAlign: 'left', paddingTop: '45px', paddingBottom: '8px', borderBottom: '1px solid #ccc' }}>Fuel</td>
          <td style={{ textAlign: 'right', paddingTop: '45px', paddingBottom: '8px', borderBottom: '1px solid #ccc' }}>Diesel</td>
        </tr>
        <tr>
          <td style={{ textAlign: 'left', paddingTop: '45px', paddingBottom: '8px', borderBottom: '1px solid #ccc' }}>Transmission</td>
          <td style={{ textAlign: 'right', paddingTop: '45px', paddingBottom: '8px', borderBottom: '1px solid #ccc' }}>Automatic</td>
        </tr>
        <tr>
          <td style={{ textAlign: 'left', paddingTop: '45px', paddingBottom: '8px', borderBottom: '1px solid #ccc' }}>Engine Power</td>
          <td style={{ textAlign: 'right', paddingTop: '45px', paddingBottom: '8px', borderBottom: '1px solid #ccc' }}>210 KW</td>
        </tr>
        <tr>
          <td style={{ textAlign: 'left', paddingTop: '45px', paddingBottom: '8px', borderBottom: '1px solid #ccc' }}>HP</td>
          <td style={{ textAlign: 'right', paddingTop: '45px', paddingBottom: '8px', borderBottom: '1px solid #ccc' }}>286 HP</td>
        </tr>
        <tr>
          <td style={{ textAlign: 'left', paddingTop: '45px', paddingBottom: '8px', borderBottom: '1px solid #ccc' }}>Top Speed</td>
          <td style={{ textAlign: 'right', paddingTop: '45px', paddingBottom: '8px', borderBottom: '1px solid #ccc' }}>155 MPH</td>
        </tr>
        <tr>
          <td style={{ textAlign: 'left', paddingTop: '45px', paddingBottom: '8px', borderBottom: '1px solid #ccc' }}>Emissions</td>
          <td style={{ textAlign: 'right', paddingTop: '45px', paddingBottom: '8px', borderBottom: '1px solid #ccc' }}>194 G CO2/Km</td>
        </tr>
      </tbody>
    </table>

    {/* Right Side table */}

    <table style={{ width: '48%', borderCollapse: 'collapse' }}>
      <tbody>
        <tr>
          <td style={{ textAlign: 'left', paddingTop: '45px', paddingBottom: '8px', borderBottom: '1px solid #ccc' }}>Best Price:</td>
          <td style={{ textAlign: 'right', paddingTop: '45px', paddingBottom: '8px', borderBottom: '1px solid #ccc' }}>$40,000</td>
        </tr>
        <tr>
          <td style={{ textAlign: 'left', paddingTop: '45px', paddingBottom: '8px', borderBottom: '1px solid #ccc' }}>Engine Name</td>
          <td style={{ textAlign: 'right', paddingTop: '45px', paddingBottom: '8px', borderBottom: '1px solid #ccc' }}>50 TDI Quattro Tip Tronic</td>
        </tr>
        <tr>
          <td style={{ textAlign: 'left', paddingTop: '45px', paddingBottom: '8px', borderBottom: '1px solid #ccc' }}>Fuel</td>
          <td style={{ textAlign: 'right', paddingTop: '45px', paddingBottom: '8px', borderBottom: '1px solid #ccc' }}>Diesel</td>
        </tr>
        <tr>
          <td style={{ textAlign: 'left', paddingTop: '45px', paddingBottom: '8px', borderBottom: '1px solid #ccc' }}>Transmission</td>
          <td style={{ textAlign: 'right', paddingTop: '45px', paddingBottom: '8px', borderBottom: '1px solid #ccc' }}>Automatic</td>
        </tr>
        <tr>
          <td style={{ textAlign: 'left', paddingTop: '45px', paddingBottom: '8px', borderBottom: '1px solid #ccc' }}>Engine Power</td>
          <td style={{ textAlign: 'right', paddingTop: '45px', paddingBottom: '8px', borderBottom: '1px solid #ccc' }}>210 KW</td>
        </tr>
        <tr>
          <td style={{ textAlign: 'left', paddingTop: '45px', paddingBottom: '8px', borderBottom: '1px solid #ccc' }}>HP</td>
          <td style={{ textAlign: 'right', paddingTop: '45px', paddingBottom: '8px', borderBottom: '1px solid #ccc' }}>286 HP</td>
        </tr>
        <tr>
          <td style={{ textAlign: 'left', paddingTop: '45px', paddingBottom: '8px', borderBottom: '1px solid #ccc' }}>Top Speed</td>
          <td style={{ textAlign: 'right', paddingTop: '45px', paddingBottom: '8px', borderBottom: '1px solid #ccc' }}>155 MPH</td>
        </tr>
        <tr>
          <td style={{ textAlign: 'left', paddingTop: '45px', paddingBottom: '8px', borderBottom: '1px solid #ccc' }}>Emissions</td>
          <td style={{ textAlign: 'right', paddingTop: '45px', paddingBottom: '8px', borderBottom: '1px solid #ccc' }}>194 G CO2/Km</td>
        </tr>
      </tbody>
    </table>
  </div>
        </main>
        <div className='result'>
          <div className='result-text'> <span style={{color: '#E0FD28',}}>Scoring</span> Results</div>
        </div>
        <main className='div-main'>
          <div className='main-div-left'>
            <button style={{color: '#E47A6E',}} className='main-button'>
              Mitsubishi Attrage
            </button>
          </div>
          <div className='main-div-right'>
            <button style={{color: '#38BA6C',}} className='main-button'>
            Hyundai Sonata Hybrid
            </button>
          </div>
        </main>
        <main className='main-total'>
         <h3>Total:  8.3/10</h3>
         <h3>Total:  8.9/10</h3>
        </main>

        <div className='line'></div>
        <p className='Winner-car'>Winner Car: Hyundai Sonata Hybrid</p>
        <div className="Table">
      <table style={{ width: "60%", textAlign: "center", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th
              style={{
                borderBottom: "1px solid black",
                textAlign: "center",
                paddingTop: "25px",
                paddingBottom: "8px",
              }}
            >
              Attributes:
            </th>
            <th
              style={{
                borderLeft: "1px solid black",
                borderRight: "1px solid black",
                borderBottom: "1px solid black",
                textAlign: "center",
                paddingTop: "25px",
                paddingBottom: "8px",
              }}
            >
              Mitsubishi Attrage Score
            </th>
            <th
              style={{
                borderBottom: "1px solid black",
                textAlign: "center",
                paddingTop: "25px",
                paddingBottom: "8px",
              }}
            >
              Hyundai Sonata Hybrid
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ borderBottom: "1px solid black", paddingTop: "25px", paddingBottom: "8px" }}>
              Best Price:
            </td>
            <td
              style={{
                borderLeft: "1px solid black",
                borderRight: "1px solid black",
                borderBottom: "1px solid black",
                paddingTop: "25px",
                paddingBottom: "8px",
              }}
            >
              8.57
            </td>
            <td style={{ borderBottom: "1px solid black", paddingTop: "25px", paddingBottom: "8px" }}>
              6.10
            </td>
          </tr>
          <tr>
            <td style={{ borderBottom: "1px solid black", paddingTop: "25px", paddingBottom: "8px" }}>
              Engine Power:
            </td>
            <td
              style={{
                borderLeft: "1px solid black",
                borderRight: "1px solid black",
                borderBottom: "1px solid black",
                paddingTop: "25px",
                paddingBottom: "8px",
              }}
            >
              10.00
            </td>
            <td style={{ borderBottom: "1px solid black", paddingTop: "25px", paddingBottom: "8px" }}>
              8.57
            </td>
          </tr>
          <tr>
            <td style={{ borderBottom: "1px solid black", paddingTop: "25px", paddingBottom: "8px" }}>
              Fuel Economy :
            </td>
            <td
              style={{
                borderLeft: "1px solid black",
                borderRight: "1px solid black",
                borderBottom: "1px solid black",
                paddingTop: "25px",
                paddingBottom: "8px",
              }}
            >
              9.11
            </td>
            <td style={{ borderBottom: "1px solid black", paddingTop: "25px", paddingBottom: "8px" }}>
              7.49
            </td>
          </tr>
          <tr>
            <td style={{ borderBottom: "1px solid black", paddingTop: "25px", paddingBottom: "8px" }}>
              Emissions:
            </td>
            <td
              style={{
                borderLeft: "1px solid black",
                borderRight: "1px solid black",
                borderBottom: "1px solid black",
                paddingTop: "25px",
                paddingBottom: "8px",
              }}
            >
              6.10
            </td>
            <td style={{ borderBottom: "1px solid black", paddingTop: "25px", paddingBottom: "8px" }}>
              8.61
            </td>
          </tr>
          <tr>
            <td style={{ borderBottom: "1px solid black", paddingTop: "25px", paddingBottom: "8px" }}>
              Top Speed:
            </td>
            <td
              style={{
                borderLeft: "1px solid black",
                borderRight: "1px solid black",
                borderBottom: "1px solid black",
                paddingTop: "25px",
                paddingBottom: "8px",
              }}
            >
              7.49
            </td>
            <td style={{ borderBottom: "1px solid black", paddingTop: "25px", paddingBottom: "8px" }}>
              10.00
            </td>
          </tr>
          <tr>
            <td style={{ borderBottom: "1px solid black", paddingTop: "25px", paddingBottom: "8px" }}>
              Horse Power (HP):
            </td>
            <td
              style={{
                borderLeft: "1px solid black",
                borderRight: "1px solid black",
                borderBottom: "1px solid black",
                paddingTop: "25px",
                paddingBottom: "8px",
              }}
            >
              8.61
            </td>
            <td style={{ borderBottom: "1px solid black", paddingTop: "25px", paddingBottom: "8px" }}>
              9.11
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    {/* Compare others BTN */}
    <div className='Compare-button'>
      <button className='button-compare' onClick={handleComapreOtherBtn}>
      Compare other cars
      </button>
    </div>


      </div>
    </div>
  );
}

export default Pages;

