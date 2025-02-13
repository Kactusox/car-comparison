import React from "react";
import { FaCarSide, FaInbox, FaUserFriends,  FaChartBar, FaSignOutAlt } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import './adminpageStyle/inbox.css'



const messages = [
    {
        id: 1,
        fullName: "Edward Snowden",
        email: "Student@Wiut.Uz",
        message: `"Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur. Excepteur Sint Occaecat Cupidatat Non Proident, Sunt In Culpa Qui Officia Deserunt Mollit Anim Id Est Laborum."`
    },
    {
        id: 2,
        fullName: "Edward Snowden",
        email: "Student@Wiut.Uz",
        message: `"Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur. Excepteur Sint Occaecat Cupidatat Non Proident, Sunt In Culpa Qui Officia Deserunt Mollit Anim Id Est Laborum."`
    }
];

function Inbox() {
    return (
        <div className="adminContainer">
            <div className="admin-header">
                <h1>Admin Dashboard</h1>
                <p>Welcome Admin</p>
            </div>
        
            <div className="bodyContainer">
                <div className="sidebar">
                  <ul className="dashboard-options">
                    <li className="list-options"><FaChartBar className="icons"></FaChartBar> <a href="/admin">Dashboard</a></li>
                    <li className="list-options"><FaCarSide className="icons"></FaCarSide> <a href="/admincar">Car Management</a></li>
                    <li className="list-options"><FaUserFriends className="icons"></FaUserFriends> <a href="/users">User Management</a></li>
                    <li className="list-options"><FaInbox className="icons"></FaInbox> <a href="">Inbox</a></li>
                    <li className="list-options"><CiSettings className="icons"></CiSettings> <a href="">System Settings</a></li>
                  </ul>
        
        
                  <a className="logout" href="/"><FaSignOutAlt className="icons"></FaSignOutAlt>  Log Out</a>
    
                </div>

                <div className='mainBody'>
                    <div className="custom-div d-flex justify-content-between h-5 bg-color-white">
                        <h2>Messages</h2>
                    </div>   

                    <div className="msg-box-container">
                        {messages.map((msg) => (
                            <div className="msg-box" key={msg.id}>
                                <p><strong>Full Name:</strong> {msg.fullName}</p>
                                <p><strong>Email Address:</strong> {msg.email}</p>
                                <hr />
                                <p>{msg.message}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>



        </div>
    );
}

export  default Inbox;