import React from 'react';
import {Link} from 'react-router-dom';

import './CustomLink.css';

const Customlink=({to,label})=>{
    return(
        <div className="link-primary">
            <Link to={to}><strong className="label-link">{label}</strong></Link>
        </div>
    );
};
export default Customlink;