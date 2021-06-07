import React from 'react';


const FormUserAdd=()=>{

    return (
        <div className="container">
            <form>

                <div className="row mt-5 ">
                    <h3 className="text-center mb-3">Cadastro de Usuários </h3>
                </div>
                <div className="row justify-content-center mt5">
                    <div className="form-group col-8 mb-3">
                        <label htmlFor="name" className="form-label"><strong>Nome</strong></label>
                        <input type="text" className="form-control" name="name" id="name" />
                    </div>
                    <div className="form-group col-8 mb-3">
                        <label htmlFor="email" className="form-label"><strong>Email</strong></label>
                        <input type="email" className="form-control" name="email" id="email" />
                    </div>
                    <div className="form-group col-8 mb-3">
                        <label htmlFor="contact" className="form-label"><strong>Telefone</strong></label>
                        <input type="text" className="form-control" name="contact" id="contact" />
                    </div>
                    <div className="form-group col-8 mb-3">
                        <label htmlFor="password" className="form-label"><strong>Senha</strong></label>
                        <input type="password" className="form-control" name="password" id="passwrod" />
                    </div>
                    <div className="form-group col-8 mb-3">
                        <label htmlFor="repassword" className="form-label"><strong>Repita a Senha</strong></label>
                        <input type="password" className="form-control" name="repassword" id="repassword" />
                    </div>
                    <div className="col-8 mt-4 mb-5">
                        <button type="submit" className="btn btn-success float-end ">Salvar</button> 
                    </div>

                </div>
            </form>
        </div>
    );
};

export default FormUserAdd;