import React from 'react';


const FormListIncident=()=>{
    return(
        <div className="container border shadow p-3 mb-5 bg-body rounded">
            <div className="row mb-5 mt-5">
                <h3 className="text-center"><strong>Criando Incidente</strong></h3>
            </div>
            <form>
                <div className="row justify-content-center">
                    
                        <div className="form-group col-10 mb-2">
                            <label htmlFor="title" className="form-label" ><strong>Titulo do Incidente</strong></label>
                            <input type="text" className="form-control" name="title" id="title"/>
                        </div>
                        <div className="form-group col-10 mb-2">
                            <label htmlFor="description" className="form-label"><strong>Descrição</strong></label>
                            <textarea className="form-control" rows="4" name="description" id="description"></textarea>
                        </div>
                        <div className="form-group col-10 mb-2">
                            <label htmlFor="category" className="form-label" ><strong>Categoria técnica</strong></label>
                            <select type="text" className="form-select" name="category" id="category" >

                            </select>
                        </div>
                        <div className="col-10 mt-3 mb-5">
                            <button type="submit" className="btn btn-success float-end">Salvar</button>
                        </div>
                    
                </div>  
            </form>
        </div>
    );
};

export default FormListIncident;