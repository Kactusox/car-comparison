import React, {useState, useEffect} from 'react';
import '../style/mainPage.css'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

import CompareCars  from './comparisonSection';
import PopularComparisons from './popularComparisons';
import Footer from './footer'


function Home() {

  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [years, setYears] = useState([]);
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  
  const navigate = useNavigate();


  const handleMakeChange = (e) => {
    setSelectedMake(e.target.value);
    setSelectedModel(''); // Reset model when make changes
  };

  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleSignInClick = () => {
    navigate('/signin'); 
  };

  const handleSearchClick = () => {
    if (selectedMake && selectedModel && selectedYear) {
      navigate('/searchResult', {
        state: {
          make: selectedMake,
          model: selectedModel,
          year: selectedYear
        }
      });
    } else {
      alert('Please select all fields before searching');
    }
  };
  // Generate years from 1995 to current year
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const yearsList = [];
    for (let year = currentYear; year >= 1995; year--) {
      yearsList.push(year);
    }
    setYears(yearsList);
  }, []);

  // Fetch car makes
  useEffect(() => {
    const fetchMakes = async () => {
      try {
        const response = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes?format=json');
        const data = await response.json();
        setMakes(data.Results);
      } catch (error) {
        console.error('Error fetching makes:', error);
      }
    };
    fetchMakes();
  }, []);

  // Fetch models when make is selected
  useEffect(() => {
    const fetchModels = async () => {
      if (selectedMake) {
        try {
          const response = await fetch(
            `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${selectedMake}?format=json`
          );
          const data = await response.json();
          setModels(data.Results);
        } catch (error) {
          console.error('Error fetching models:', error);
        }
      }
    };
    fetchModels();
  }, [selectedMake]);

  return (
    <div className='mainContainer'>
      <header className="header">
        <div className="container d-flex justify-content-between align-items-center">
          <h1>Car Comparison</h1>
          <nav>
            <ul className="nav">
              <li><a href="/">Home</a></li>
              <li><a href="/pages">Pages</a></li>
              <li><a href="about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              <button className="sign-in-btn" onClick={handleSignInClick}> 
                <FontAwesomeIcon className='icon' icon={faUser} /> Sign In</button>
            </ul>
          </nav>
        </div>
      </header>

      <div className="text-center">
        <h2>Find Your Perfect Car by Comparing</h2>
        <div className="search-bar">
          <select value={selectedMake} onChange={handleMakeChange}>
          <option value="">Select Make</option>
            {makes.map((make) => (
              <option key={make.Make_ID} value={make.Make_Name}>
                {make.Make_Name}
              </option>
            ))}
          </select>

          <select value={selectedModel} onChange={handleModelChange}>
            <option value="">Select Model</option>
            {models.map((model) => (
              <option key={model.Model_ID} value={model.Model_Name}>
                {model.Model_Name}
              </option>
            ))}
          </select>

          <select value={selectedYear} onChange={handleYearChange}>
            <option value="">Select Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

          <button className="searchBtn" onClick={handleSearchClick} > <FontAwesomeIcon icon={faMagnifyingGlass} />Search Cars</button>
        </div>
      </div>

      <CompareCars/>
      <PopularComparisons/>
      <Footer/>
    
    </div>
  );
}



export default Home;


