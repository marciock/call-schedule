import React from 'react';

import {Link} from 'react-router-dom';

const NavBar =()=>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand">CallSchedule</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto ">
                    <li className="nav-item ">
                    fdf
                    </li>
                 
                
                </ul>
                
            </div>
        </nav>
    );
};

export default NavBar;