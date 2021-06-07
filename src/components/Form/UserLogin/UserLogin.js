import React from 'react';


//import Customlink from 'components/Uifolder/CustomLink/CustonLink';
import PassView from 'components/Uifolder/PassView/PassView';


import './UserLogin.css';

const FormUserLogin =({onClickModal})=>{
    return (
    <div className="card shadow p-3 mb-5 bg-body rounded">
      <div className="card-body">
        <h3 className="card-title">Login</h3>
          <form>
            <div className="row justify-content-center">
              <div className="form-group col-sm-10 mt-2">
                <label htmlFor="email" className="form-label"><strong>Email</strong></label>
                <input type="email" className="form-control bortder border-dark" name="email" id="email" />
              </div>
              <div className="form-group col-sm-10 mt-2">
                <label htmlFor="senha" className="form-label"><strong>Senha</strong></label>
                 <PassView nameInput="senha" id="senha"/>
              </div>
              <div className="col-sm-10 ">
                <div className="float-end mt-3 d-inline-flex">
                 <button type="button" className="bt-person" onClick={()=>onClickModal(true)}>Cadastre-se</button>
                 
                 <button  type="submit" className="btn btn-success mg-l">Entrar</button>
                </div>
               
              </div>
            </div>
          </form>
      </div>
    </div>
    );
};

export default FormUserLogin;