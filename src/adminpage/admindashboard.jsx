import React from "react";
import   './admindashStyle.css';
import { FaCarSide, FaUsers, FaUserFriends,  FaChartBar, FaSignOutAlt, FaInbox } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";

function AdminDashboard () {
  return (
    <div className="adminContainer">

      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <p>Welcome Admin</p>
      </div>

      <div className="bodyContainer">
        <div className="sidebar">
          <ul className="dashboard-options">
            <li className="list-options"><FaChartBar className="icons"></FaChartBar> <a href="">Dashboard</a></li>
            <li className="list-options"><FaCarSide className="icons"></FaCarSide> <a href="/admincar">Car Management</a></li>
            <li className="list-options"><FaUserFriends className="icons"></FaUserFriends> <a href="">User Management</a></li>
            <li className="list-options"><FaInbox className="icons"></FaInbox> <a href="">Inbox</a></li>
            <li className="list-options"><CiSettings className="icons"></CiSettings> <a href="">System Settings</a></li>
          </ul>


          <a className="logout" href=""><FaSignOutAlt className="icons"></FaSignOutAlt>  Log Out</a>

        </div>

        <div className="mainBody">
          <div className="total-user">
              <h3> <FaUsers className="icons"></FaUsers> Total Users</h3>
              <p> 1025</p>
          </div>

          <div className="total-car">
            <h3><FaCarSide className="icons"></FaCarSide> Total Cars</h3>
            <p>1567</p>
          </div>
        </div>
      </div>



    </div>
  );
};

export default AdminDashboard;
