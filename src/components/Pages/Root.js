import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import '@popperjs/core/dist/umd/popper';
import 'bootstrap/dist/js/bootstrap';
import 'font-awesome/css/font-awesome.css';


import Login from 'components/Pages/Login/Login';
import Dash from 'components/Pages/Dash/Dash';

const Root=()=>{
    return(
        <Router>
           <Switch>
               <Route exact path="/" component={Login}></Route>
               <Route exact path="/dash" component={Dash}></Route>
           </Switch>
        </Router>
    );
};

export default Root;