import React from 'react'
import { FaCarSide, FaUsers, FaUserFriends,  FaChartBar, FaSignOutAlt } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
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


            </div>
        
        </div>
    );
};

export default CarManagement;