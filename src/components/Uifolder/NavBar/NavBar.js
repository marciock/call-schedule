import React from 'react';

//import {Link} from 'react-router-dom';
import './NavBar.css';
const NavBar =()=>{
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
            <a className="navbar-brand" href="/">Navbar</a>
       
        </div>
        <div className=" mx-auto">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/dash/#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav  ">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">Features</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">Pricing</a>
                    </li>
                
                </ul>
            </div>
        </div>
        
        </nav>
    );
};

export default NavBar;