import React, {useState} from "react";
import { FaCarSide, FaInbox, FaUserFriends,  FaChartBar, FaSignOutAlt } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { Search } from "lucide-react";
import { FaEdit, FaTrash } from "react-icons/fa";
import './adminpageStyle/usermanagement.css'

const initialUsers = [
    { id: 1, username: "Kactus", createdAt: "01.01.2025" },
    { id: 2, username: "wiutadmin", createdAt: "03.02.2025" },
    { id: 3, username: "user111", createdAt: "05.03.2025" },
];

function UserManagement() {
    const [searchTerm, setSearchTerm] = useState("");
    const [users, setUsers] = useState(initialUsers);

    // Filter users 
    const filteredUsers = users.filter(user =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Delete a user 
    const deleteUser = (id) => {
        const updateUsers = users.filter(user => user.id !== id);
        setUsers(updateUsers);
    }

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
                                <li className="list-options"><FaCarSide className="icons"></FaCarSide> <a href="/admincar">Car Management</a></li>
                                <li className="list-options"><FaUserFriends className="icons"></FaUserFriends> <a href="">User Management</a></li>
                                <li className="list-options"><FaInbox className="icons"></FaInbox> <a href="">Inbox</a></li>
                                <li className="list-options"><CiSettings className="icons"></CiSettings> <a href="">System Settings</a></li>
                            </ul>
        
                            <a className="logout" href=""><FaSignOutAlt className="icons"></FaSignOutAlt>  Log Out</a>
                        </div>

                        <div className="mainBody">
                            <div className="input-group search-container">
                                    <span className="input-group-text bg-white border-end-0">
                                        <Search className="text-muted" size={20} />
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control border-start-0 ps-2"
                                        placeholder="Search Users..."
                                        aria-label="Search Users"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                            </div>

                            <div className="users-container">
                                <table className="user-table">
                                    <thead>
                                    <tr>
                                        <th>User ID</th>
                                        <th>Username</th>
                                        <th>Created At</th>
                                        <th>Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {filteredUsers.length > 0 ? (
                                        filteredUsers.map((user) => (
                                            <tr key={user.id}>
                                                <td>{user.id}</td>
                                                <td>{user.username}</td>
                                                <td>{user.createdAt}</td>
                                                <td className="actions">
                                                    <button className="edit-btn">
                                                        <FaEdit />
                                                    </button>
                                                    <button className="delete-btn" onClick={() => deleteUser(user.id)}>
                                                        <FaTrash />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                        ) : (
                                            <tr>
                                                <td colSpan="4" className="no-results">No users found</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default UserManagement;