import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import cars1 from './img/Mits 1.png';
import cars2 from './img/12 2.png';
import { ImPrevious } from 'react-icons/im';

// Initial car specifications
const initialCarSpecs = {
  mitsubishi: {
    name: "Mitsubishi Attrage",
    company: "Mitsubishi, 2022",
    image: cars1,
    buttonColor: "#E47A6E",
    specs: [
      { label: "Best Price:", value: "$15,000", numericValue: 15000 },
      { label: "Engine Name", value: "1.2L MIVEC 3-Cylinder", numericValue: null },
      { label: "Fuel", value: "Petrol", numericValue: 1 },
      { label: "Transmission", value: "CVT (Automatic)", numericValue: 1 },
      { label: "Engine Power", value: "78 HP", numericValue: 78 },
      { label: "Top Speed", value: "110 MPH", numericValue: 110 },
      { label: "Fuel Economy", value: "5.6 L/100km", numericValue: 5.6 },
      { label: "Emissions", value: "128 G CO2/Km", numericValue: 128 }
    ],
    score: 0,
    individualScores: {}
  },
  hyundai: {
    name: "Hyundai Sonata Hybrid",
    company: "Hyundai, 2022",
    image: cars2,
    buttonColor: "#38BA6C",
    specs: [
      { label: "Best Price:", value: "$32,000", numericValue: 32000 },
      { label: "Engine Name", value: "2.0L GDI 4-Cylinder + Electric Motor", numericValue: null },
      { label: "Fuel", value: "Hybrid (Petrol + Electric)", numericValue: 2 },
      { label: "Transmission", value: "6-Speed Automatic", numericValue: 1 },
      { label: "Engine Power", value: "192 HP", numericValue: 192 },
      { label: "Top Speed", value: "121 MPH", numericValue: 121 },
      { label: "Fuel Economy", value: "4.5 L/100km", numericValue: 4.5 },
      { label: "Emissions", value: "103 G CO2/Km", numericValue: 103 }
    ],
    score: 0,
    individualScores: {}
  },
};

// Define scoring attributes (the ones we want to include in calculations)
const scoringAttributes = [
  { id: "price", label: "Best Price:", specIndex: 0 },
  { id: "enginePower", label: "Engine Power", specIndex: 4 },
  { id: "fuelEconomy", label: "Fuel Economy", specIndex: 7 },
  { id: "emissions", label: "Emissions", specIndex: 8 },
  { id: "topSpeed", label: "Top Speed", specIndex: 6 },
  { id: "horsePower", label: "Horse Power (HP)", specIndex: 4 }
];

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
  const [carSpecs, setCarSpecs] = useState(initialCarSpecs);
  const [weights, setWeights] = useState({});
  const [winner, setWinner] = useState("");

  // Initialize default weights (5)
  useEffect(() => {
    const defaultWeights = {};
    scoringAttributes.forEach(attr => {
      defaultWeights[attr.id] = 5;
    });
    setWeights(defaultWeights);
  }, []);

  // Calculate scores whenever weights change
  useEffect(() => {
    if (Object.keys(weights).length === 0) return; // Skip if weights not initialized
    
    calculateScores();
  }, [weights]);

  const calculateScores = () => {
    const updatedCarSpecs = { ...carSpecs };
    const mitsubishiScores = {};
    const hyundaiScores = {};
    
    // Calculate total weight
    let totalWeight = 0;
    Object.values(weights).forEach(weight => {
      totalWeight += weight;
    });
    
    // Prepare weighted sums
    let mitsubishiWeightedSum = 0;
    let hyundaiWeightedSum = 0;
    
    // Calculate weighted values for each attribute
    scoringAttributes.forEach(attr => {
      const mitsubishiSpec = updatedCarSpecs.mitsubishi.specs[attr.specIndex];
      const hyundaiSpec = updatedCarSpecs.hyundai.specs[attr.specIndex];
      
      if (mitsubishiSpec && hyundaiSpec && mitsubishiSpec.numericValue !== null && hyundaiSpec.numericValue !== null) {
        // Calculate individual weighted values
        const mitsubishiWeightedValue = mitsubishiSpec.numericValue * weights[attr.id];
        const hyundaiWeightedValue = hyundaiSpec.numericValue * weights[attr.id];
        
        // Store individual scores
        mitsubishiScores[attr.id] = mitsubishiWeightedValue;
        hyundaiScores[attr.id] = hyundaiWeightedValue;
        
        // Add to weighted sums
        mitsubishiWeightedSum += mitsubishiWeightedValue;
        hyundaiWeightedSum += hyundaiWeightedValue;
      }
    });
    
    // Calculate final scores using the formula: W = WeightedSum / TotalWeight
    const mitsubishiScore = Math.round(mitsubishiWeightedSum / totalWeight);
    const hyundaiScore = Math.round(hyundaiWeightedSum / totalWeight);
    
    // Update car specs with scores
    updatedCarSpecs.mitsubishi.score = mitsubishiScore;
    updatedCarSpecs.mitsubishi.individualScores = mitsubishiScores;
    
    updatedCarSpecs.hyundai.score = hyundaiScore;
    updatedCarSpecs.hyundai.individualScores = hyundaiScores;
    
    // Determine winner
    const winnerCar = mitsubishiScore > hyundaiScore ? 
      updatedCarSpecs.mitsubishi.name : 
      updatedCarSpecs.hyundai.name;
    
    setCarSpecs(updatedCarSpecs);
    setWinner(winnerCar);
  };

  const handleWeightChange = (attributeId, value) => {
    setWeights({
      ...weights,
      [attributeId]: parseInt(value)
    });
  };

  // Generate weight options for dropdown
  const weightOptions = Array.from({ length: 10 }, (_, i) => i + 1);

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
          <h3>Total: {carSpecs.mitsubishi.score}</h3>
          <h3>Total: {carSpecs.hyundai.score}</h3>
        </main>

        <div className='line'></div>
        <p className='Winner-car'>Winner Car: {winner}</p>

        {/* Individual characteristic scores table */}
        <div className="scoring-table-container" style={{ marginTop: '30px', marginBottom: '30px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px', textAlign: 'center' }}>
            <thead>
              <tr style={{ backgroundColor: '#3a4161', color: 'white' }}>
                <th style={{ padding: '15px', textAlign: 'left', border: '1px solid #ddd' }}>Attributes</th>
                <th style={{ padding: '15px', textAlign: 'center', border: '1px solid #ddd' }}>{carSpecs.mitsubishi.name} Score</th>
                <th style={{ padding: '15px', textAlign: 'center', border: '1px solid #ddd' }}>{carSpecs.hyundai.name} Score</th>
                <th style={{ padding: '15px', textAlign: 'center', border: '1px solid #ddd' }}>Choose Custom Values</th>
              </tr>
            </thead>
            <tbody>
              {scoringAttributes.map((attr) => {
                const mitsubishiSpec = carSpecs.mitsubishi.specs.find(s => s.label === attr.label);
                const hyundaiSpec = carSpecs.hyundai.specs.find(s => s.label === attr.label);
                
                return (
                  <tr key={attr.id}>
                    <td style={{ padding: '15px', textAlign: 'left', border: '1px solid #ddd' }}>{attr.label}</td>
                    <td style={{ padding: '15px', textAlign: 'center', border: '1px solid #ddd' }}>
                      {carSpecs.mitsubishi.individualScores[attr.id] ? 
                        Math.round(carSpecs.mitsubishi.individualScores[attr.id]) : 0}
                    </td>
                    <td style={{ padding: '15px', textAlign: 'center', border: '1px solid #ddd' }}>
                      {carSpecs.hyundai.individualScores[attr.id] ? 
                        Math.round(carSpecs.hyundai.individualScores[attr.id]) : 0}
                    </td>
                    <td style={{ padding: '15px', textAlign: 'center', border: '1px solid #ddd' }}>
                      <select
                        value={weights[attr.id] || 5}
                        onChange={(e) => handleWeightChange(attr.id, e.target.value)}
                        style={{ 
                          padding: '5px 10px', 
                          borderRadius: '3px',
                          border: '1px solid #ccc',
                          width: '60px'
                        }}
                      >
                        {weightOptions.map(option => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                );
              })}
              <tr style={{ backgroundColor: '#3a4161', color: 'white', fontWeight: 'bold' }}>
                <td style={{ padding: '15px', textAlign: 'left', border: '1px solid #ddd' }}>Total:</td>
                <td style={{ padding: '15px', textAlign: 'center', border: '1px solid #ddd' }}>{carSpecs.mitsubishi.score}</td>
                <td style={{ padding: '15px', textAlign: 'center', border: '1px solid #ddd' }}>{carSpecs.hyundai.score}</td>
                <td style={{ padding: '15px', textAlign: 'center', border: '1px solid #ddd' }}></td>
              </tr>
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