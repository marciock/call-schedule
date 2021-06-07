import React from 'react';

import './ButtonPlus.css';

const ButtonPlus=({direction,fixed,onClickModal})=>{
    if(!fixed){
        return null;
    }

    const concatenation=`btn btn-danger btn-lg rounded-pill ${direction}`;
    const fixedDiv=`align-div ${fixed}`
    return (
        <div className={fixedDiv}>
            <button type="button" 
            className={concatenation} 
            onClick={()=>onClickModal(true)}>
                <span className="fa fa-plus" ></span>
            </button>
        </div>
    );
};

export default ButtonPlus;