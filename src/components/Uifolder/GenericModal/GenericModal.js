import React from 'react';
import ReactDOM from 'react-dom';

import './GenericModal.css';

const GenericModal=({children,isOpen,onClickClose})=>{
    if(!isOpen){
        return null;
    }
    const portalRoot=document.getElementById('modal');
    return ReactDOM.createPortal(
        <div className="ui-modal-overlay">
            <div className="ui-modal">
                <button type="button" className="ui-modal-close" onClick={onClickClose}>x</button>
                {children}
            </div>
        </div>,
        portalRoot
    );
};

export default GenericModal;