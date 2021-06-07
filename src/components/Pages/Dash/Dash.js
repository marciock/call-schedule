import React,{useState} from 'react';

import GenericModal from 'components/Uifolder/GenericModal/GenericModal';
import NavBar from 'components/Uifolder/NavBar/NavBar';
import ButtonPlus from 'components/Uifolder/ButtonPlus/ButtonPlus';
import FormListIncident from 'components/Form/ListIncident/ListIncident';

const Dash =()=>{
    const [openModal,setOpenModal]=useState(null)
    return (
        <div>
            <NavBar />
                <div className="container">
                    <h1>Dash</h1>
                </div>
            <ButtonPlus fixed="fixed-bottom" direction="float-end" onClickModal={setOpenModal}/>
            <GenericModal isOpen={Boolean(openModal)} onClickClose={()=>setOpenModal(null)}>
                <FormListIncident />
            </GenericModal>
        </div>
        
    );
};

export default Dash;