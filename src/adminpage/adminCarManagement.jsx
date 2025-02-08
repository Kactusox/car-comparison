import React from 'react'
import { FaCarSide, FaUsers, FaUserFriends,  FaChartBar, FaSignOutAlt } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { BarChart, Car, Users, Settings, LogOut, Search, Edit, Trash2, Plus } from 'lucide-react';
import './adminCarStyle.css';

function CarManagement() {
    return (
        <div className='adminContainer'>
            <div className="admin-header">
                <h1>Admin Dashboard</h1>
                <p>Welcome Admin</p>
            </div>


            <div className='bodyContainer'>
                <div className="sidebar">
                    <ul className="dashboard-options">
                        <li className="list-options"><FaChartBar className="icons"></FaChartBar> <a href="">Dashboard</a></li>
                        <li className="list-options"><FaCarSide className="icons"></FaCarSide> <a href="">Car Management</a></li>
                        <li className="list-options"><FaUserFriends className="icons"></FaUserFriends> <a href="">User Management</a></li>
                        <li className="list-options"><CiSettings className="icons"></CiSettings> <a href="">System Settings</a></li>
                    </ul>

                    <a className="logout" href=""><FaSignOutAlt className="icons"></FaSignOutAlt>  Log Out</a>
                </div>

                <div className='mainBody'>
                    <div className="custom-div d-flex justify-content-between h-5 bg-color-white">
                        <h2>Car Management</h2>
                        <button className="btn btn-primary">
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
                            />
                        </div>

                        {/* FILTER OPTIONS */}

                        <div className='column mt-5'>
                            <div className="col mb-4 mt-4">
                                <select className="form-select">
                                <option value="">All Company</option>
                                <option value="hyundai">Hyundai</option>
                                <option value="toyota">Toyota</option>
                                <option value="honda">Honda</option>
                                </select>
                            </div>

                            <div className="col mb-4 mt-4">
                                <select className="form-select">
                                <option value="">All Model</option>
                                <option value="sonata">Sonata</option>
                                <option value="elantra">Elantra</option>
                                </select>
                            </div>

                            <div className="col mb-4 mt-4">
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

         </div>
    );
};

export default CarManagement;