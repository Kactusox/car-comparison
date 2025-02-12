import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import Navbar from './navigation/navbar';  
import Home from './homepage/home';      
import Pages from './pages';   
import About from './about';    
import Contact from './contact';
import Layout from './navigation/Layout'
import Login from './registrationpages/login';
import Signin from './registrationpages/signin';
import CarDetails from './searchresult'
import AdminDashboard  from './adminpage/admindashboard';
import CarManagement  from './adminpage/adminCarManagement';
import { ImPrevious } from 'react-icons/im';
import UserManagement from './adminpage/usermanagement';

function App() {
  return (
    <Router> 
      <div className='App'>
      <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Signin/>} />
            <Route path="/searchresult" element={<CarDetails/>} />
            <Route path="/admin" element={<AdminDashboard/>} />
            <Route path='/admincar' element= {<CarManagement/>} />
            <Route path='/users' element= {<UserManagement/>} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
