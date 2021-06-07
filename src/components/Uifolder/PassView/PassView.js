import React,{useState} from 'react';

import './PassView.css';
const PassView=()=>{
const [stateView,setStateView]=useState('password');
const [iconView,setIconView]=useState('fa fa-eye');
const clickView=()=>{
    if(stateView==='password'){
        
            setStateView('text');
            setIconView('fa fa-eye-slash');
        
    }else{
        setStateView('password');
        setIconView('fa fa-eye');
    }
}

    return (
        <div className="flex-content">
            <input type={stateView} className="form-control border border-dark" aria-label="Digite a Senha" aria-describedby="button-change" />
            <button className="btn btn-outline-primary" type="button" id="button-change" onClick={clickView}>
                <span className={iconView}></span>
            </button>
        </div>
    );
};
export default PassView;