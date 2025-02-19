import React from 'react';
import { useNavigate } from 'react-router-dom';
import cars1 from './img/Mits 1.png';
import cars2 from './img/12 2.png';
import { ImPrevious } from 'react-icons/im';


const carSpecs = {
  mitsubishi: {
    name: "Mitsubishi Attrage",
    company: "Mitsubishi, 2022",
    image: cars1,
    score: 8.3,
    buttonColor: "#E47A6E",
    specs: [
      { label: "Best Price:", value: "$40,000" },
      { label: "Engine Name", value: "50 TDI Quattro Tip Tronic" },
      { label: "Fuel", value: "Diesel" },
      { label: "Transmission", value: "Automatic" },
      { label: "Engine Power", value: "210 KW" },
      { label: "HP", value: "286 HP" },
      { label: "Top Speed", value: "155 MPH" },
      { label: "Emissions", value: "194 G CO2/Km" }
    ],
    scores: [
      { attribute: "Best Price", value: 8.57 },
      { attribute: "Engine Power", value: 10.00 },
      { attribute: "Fuel Economy", value: 9.11 },
      { attribute: "Emissions", value: 6.10 },
      { attribute: "Top Speed", value: 7.49 },
      { attribute: "Horse Power (HP)", value: 8.61 }
    ]
  },
  hyundai: {
    name: "Hyundai Sonata Hybrid",
    company: "Hyundai, 2022",
    image: cars2,
    score: 8.9,
    buttonColor: "#38BA6C",
    specs: [
      { label: "Best Price:", value: "$40,000" },
      { label: "Engine Name", value: "50 TDI Quattro Tip Tronic" },
      { label: "Fuel", value: "Diesel" },
      { label: "Transmission", value: "Automatic" },
      { label: "Engine Power", value: "210 KW" },
      { label: "HP", value: "286 HP" },
      { label: "Top Speed", value: "155 MPH" },
      { label: "Emissions", value: "194 G CO2/Km" }
    ],
    scores: [
      { attribute: "Best Price", value: 6.10 },
      { attribute: "Engine Power", value: 8.57 },
      { attribute: "Fuel Economy", value: 7.49 },
      { attribute: "Emissions", value: 8.61 },
      { attribute: "Top Speed", value: 10.00 },
      { attribute: "Horse Power (HP)", value: 9.11 }
    ]
  }
};


const SpecsTable = ({ specs }) => (
  <table style={{ width: '48%', borderCollapse: 'collapse' }}>
    <tbody>
      {specs.map((spec, index) => (
        <tr key={index}>
          <td style={{ textAlign: 'left', paddingTop: '45px', paddingBottom: '8px', borderBottom: '1px solid #ccc' }}>
            {spec.label}
          </td>
          <td style={{ textAlign: 'right', paddingTop: '45px', paddingBottom: '8px', borderBottom: '1px solid #ccc' }}>
            {spec.value}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

function Pages() {
  const navigate = useNavigate();
  const winnerCar = carSpecs.mitsubishi.score > carSpecs.hyundai.score ? 
    carSpecs.mitsubishi.name : carSpecs.hyundai.name;

  return (
    <div className='Pages'>
      <div className='contener'>
        <div className='result'>
          <div className='result-text'>Result</div>
        </div>

        <main className='img-main'>
          <div className='img-main-car'>
            <img src={carSpecs.mitsubishi.image} alt="car" />
            <img src={carSpecs.hyundai.image} alt="car" />
          </div>
          <div className='main-car-name'>
            <h3>{carSpecs.mitsubishi.name}</h3>
            <h3 className='car-name'>{carSpecs.hyundai.name}</h3>
          </div>
          <div className='company'>
            <p className='car-company'>{carSpecs.mitsubishi.company}</p>
            <p className='car-company'>{carSpecs.hyundai.company}</p>
          </div>
        </main>

        <main className='table-main'>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '80px', width: '100%' }}>
            <SpecsTable specs={carSpecs.mitsubishi.specs} />
            <SpecsTable specs={carSpecs.hyundai.specs} />
          </div>
        </main>

        <div className='result'>
          <div className='result-text'>
            <span style={{color: '#E0FD28'}}>Scoring</span> Results
          </div>
        </div>

        <main className='div-main'>
          <div className='main-div-left'>
            <button style={{color: carSpecs.mitsubishi.buttonColor}} className='main-button'>
              {carSpecs.mitsubishi.name}
            </button>
          </div>
          <div className='main-div-right'>
            <button style={{color: carSpecs.hyundai.buttonColor}} className='main-button'>
              {carSpecs.hyundai.name}
            </button>
          </div>
        </main>

        <main className='main-total'>
          <h3>Total: {carSpecs.mitsubishi.score}/10</h3>
          <h3>Total: {carSpecs.hyundai.score}/10</h3>
        </main>

        <div className='line'></div>
        <p className='Winner-car'>Winner Car: {winnerCar}</p>

        {/* Individual characteristic scores */}

        <div className="Table">
          <table style={{ width: "48%", textAlign: "center", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ borderBottom: "1px solid black", textAlign: "center", paddingTop: "25px", paddingBottom: "8px" }}>
                    Attributes:
                  </th>
                  <th style={{ borderLeft: "1px solid black", borderRight: "1px solid black", borderBottom: "1px solid black", textAlign: "center", paddingTop: "25px", paddingBottom: "8px" }}>
                    {carSpecs.mitsubishi.name} Score
                  </th>
                  <th style={{ borderBottom: "1px solid black", textAlign: "center", paddingTop: "25px", paddingBottom: "8px" }}>
                    {carSpecs.hyundai.name}
                  </th>
                </tr>
              </thead>
              <tbody>
              {carSpecs.mitsubishi.scores.map((score, index) => (
                <tr key={index}>
                  <td style={{ borderBottom: "1px solid black", paddingTop: "25px", paddingBottom: "8px" }}>
                    {score.attribute}:
                  </td>
                  <td style={{ borderLeft: "1px solid black", borderRight: "1px solid black", borderBottom: "1px solid black", paddingTop: "25px", paddingBottom: "8px" }}>
                    {score.value.toFixed(2)}
                  </td>
                  <td style={{ borderBottom: "1px solid black", paddingTop: "25px", paddingBottom: "8px" }}>
                    {carSpecs.hyundai.scores[index].value.toFixed(2)}
                  </td>
                </tr>
              ))}
              </tbody>
          </table>
        </div>

        <div className='Compare-button'>
          <button className='button-compare' onClick={() => navigate('/')}>
            Compare other cars
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pages;