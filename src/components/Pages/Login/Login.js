import React,{useState} from 'react';

import GenericModal from 'components/Uifolder/GenericModal/GenericModal';
import FormUserAdd from 'components/Form/UserAdd/UserAdd';
import './Login.css';

import FormUserLogin from 'components/Form/UserLogin/UserLogin';
const Login=()=>{
    const [openModal,setOpenModal]=useState(null)
    return(
        <div className="container mt-10 ">
            <div className="row justify-content-center">
                <div className="col-8">
                     <FormUserLogin onClickModal={setOpenModal}/>
                </div>
            </div>
          <GenericModal isOpen={Boolean(openModal)} onClickClose={()=>setOpenModal(null)}>
             <FormUserAdd />
          </GenericModal>
        </div>

    );
};

export default Login;