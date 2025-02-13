import React, {useState} from 'react'
import { FaCarSide, FaInbox, FaUserFriends,  FaChartBar, FaSignOutAlt } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { BarChart, Car, Users, Settings, LogOut, Search, Edit, Trash2, Plus } from 'lucide-react';
import './adminpageStyle/adminCarStyle.css';
import AddCarModal from "./addCarModal"
import carsImage from '../img/12 2.png'

const carsData = [
    { id: 1, name: "Sonata Hybrid", year: 2023, brand: "Hyundai", image: carsImage },
    { id: 2, name: "Elantra", year: 2022, brand: "Hyundai", image: carsImage },
    { id: 3, name: "Corolla", year: 2021, brand: "Toyota", image: carsImage },
    { id: 4, name: "Camry", year: 2020, brand: "Toyota", image: carsImage },
    { id: 5, name: "Civic", year: 2019, brand: "Honda", image: carsImage },
    { id: 6, name: "Accord", year: 2018, brand: "Honda", image: carsImage },
    { id: 7, name: "Rav4", year: 2023, brand: "Toyota", image: carsImage },
    { id: 8, name: "Pilot", year: 2022, brand: "Honda", image: carsImage },
    { id: 9, name: "Tucson", year: 2021, brand: "Hyundai", image: carsImage },
    { id: 10, name: "CR-V", year: 2020, brand: "Honda", image: carsImage },
    { id: 11, name: "Highlander", year: 2019, brand: "Toyota", image: carsImage },
    { id: 12, name: "Santa Fe", year: 2018, brand: "Hyundai", image: carsImage },
    { id: 13, name: "Yaris", year: 2023, brand: "Toyota", image: carsImage },
    { id: 14, name: "Odyssey", year: 2022, brand: "Honda", image: carsImage },
    { id: 15, name: "Genesis G70", year: 2021, brand: "Hyundai", image: carsImage }
];



function CarManagement() {
    const [currentPage, setCurrentPage] = useState(1);
    const carsPerPage = 10;
    const totalCars = carsData.length;
    const [showModal, setShowModal] = useState(false);

    const [searchQuery, setSearchQuery] = useState('');
    const [brandFilter, setBrandFilter] = useState('');
    const [modelFilter, setModelFilter] = useState('');
    const [yearFilter, setYearFilter] = useState('');

    const filteredCars = carsData.filter((car) => {
        return (
            (brandFilter === "" || car.brand.toLowerCase() === brandFilter.toLowerCase()) &&
            (modelFilter === "" || car.name.toLowerCase().includes(modelFilter.toLowerCase())) &&
            (yearFilter === "" || car.year.toString() === yearFilter) &&
            (searchQuery === "" || car.name.toLowerCase().includes(searchQuery.toLowerCase()) || car.brand.toLowerCase().includes(searchQuery.toLowerCase()))
        );
    });





    return (
        <div className='adminContainer'>
            <div className="admin-header">
                <h1>Admin Dashboard</h1>
                <p>Welcome Admin</p>
            </div>


            <div className='bodyContainer'>
                <div className="sidebar">
                    <ul className="dashboard-options">
                        <li className="list-options"><FaChartBar className="icons"></FaChartBar> <a href="/admin">Dashboard</a></li>
                        <li className="list-options"><FaCarSide className="icons"></FaCarSide> <a href="">Car Management</a></li>
                        <li className="list-options"><FaUserFriends className="icons"></FaUserFriends> <a href="/users">User Management</a></li>
                        <li className="list-options"><FaInbox className="icons"></FaInbox> <a href="/inbox">Inbox</a></li>
                        <li className="list-options"><CiSettings className="icons"></CiSettings> <a href="">System Settings</a></li>
                    </ul>

                    <a className="logout" href=""><FaSignOutAlt className="icons"></FaSignOutAlt>  Log Out</a>
                </div>

                <div className='mainBody'>
                    <div className="custom-div d-flex justify-content-between h-5 bg-color-white">
                        <h2>Car Management</h2>
                        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                        <Plus size={16} className="me-2" />
                        Add New Car
                        </button>
                    </div>   

                    <div className='filters mt-4'>
                        {/* SEARCH  */}
                        <div className="input-group search-container">
                            <span className="input-group-text bg-white border-end-0">
                                <Search className="text-muted" size={20} />
                            </span>
                            <input
                                type="text"
                                className="form-control border-start-0 ps-2"
                                placeholder="Search Cars..."
                                aria-label="Search Cars"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {/* FILTER OPTIONS */}

                        <div className='column mt-5'>
                            <div className="col mb-4 mt-4">
                                <select className="form-select" onChange={(e) => setBrandFilter(e.target.value)}>
                                <option value="">All Company</option>
                                <option value="hyundai">Hyundai</option>
                                <option value="toyota">Toyota</option>
                                <option value="honda">Honda</option>
                                </select>
                            </div>

                            <div className="col mb-4 mt-4" onChange={(e) => setModelFilter(e.target.value)}>
                                <select className="form-select">
                                <option value="">All Model</option>
                                <option value="sonata">Sonata</option>
                                <option value="elantra">Elantra</option>
                                </select>
                            </div>

                            <div className="col mb-4 mt-4" onChange={(e) => setYearFilter(e.target.value)}>
                                <select className="form-select">
                                <option value="">All Year</option>
                                <option value="2023">2023</option>
                                <option value="2022">2022</option>
                                </select>
                            </div>


                        </div>

                    </div>

                </div>

            </div>

            {/* The Cars List/Cards */}

            <div className='cars'>
                {filteredCars.length > 0 ? (
                    filteredCars.map((car) => (
                        <div key={carsData.id} className="car-card">
                                <img src={car.image} alt={car.name} className="car-image" />
                                    <div className="car-details">
                                        <div className='car-namings'> 
                                            <p className="cars-name">{car.name}, {car.year}</p>
                                            <p className="car-brand">{car.brand}</p>
                                        </div>
                                        <div className="car-actions">
                                            <Edit size={20} className="edit-icon" />
                                            <Trash2 size={20} className="delete-icon" />
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No cars found.</p>
                        )}
            </div>

            {/* Pages */}

            <div className="pagination">
                <button className="pagination-btn">10 Per Page</button>
                <span className="pagination-text">
                Showing {currentPage} To {carsPerPage} Of {totalCars} Entries
                </span>
                <button className="pagination-btn">Previous</button>
                <button className="pagination-btn">Next</button>
            </div>

            {/* Add NEw Car modal */}

            {showModal && <AddCarModal setShowModal={setShowModal}/>}

        </div>        
    );
};

export default CarManagement;