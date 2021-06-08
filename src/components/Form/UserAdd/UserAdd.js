import React,{useState} from 'react';
import VMasker from 'vanilla-masker';


const FormUserAdd=()=>{
    const [values,setValues]=useState({});
    const [loading,setLoading]=useState(false);

    const handleChange=(event)=>{
        const containerValue={...values};
        containerValue[event.target.name]=event.target.value;

        setValues(containerValue);
    };

    const handleSubmit=(callback)=>(event)=>{
        event.preventDefault();
        setLoading(true);
        callback();
        setLoading(false);

        return [{ values, loading }, handleChange, handleSubmit];
    }

    const sendForm=()=>{
        
        fetch('http://localhost:5000/users',{
            method:'POST',
            headers:{
              'Content-Type':'application/json;charset=utf-8'
            },
            body:JSON.stringify(values)
          }).then(res=>{
              return res.json()
          }).then(data=>{
              console.log(data)
          });

        
    }

    return (
        <div className="container border shadow p-3 mb-5 bg-body rounded">
            <form onSubmit={handleSubmit(sendForm)}>

                <div className="row mt-5 ">
                    <h3 className="text-center mb-3"><strong>Cadastro de Usuários</strong> </h3>
                </div>
                <div className="row justify-content-center mt5">
                    <div className="form-group col-8 mb-3">
                        <label htmlFor="name" className="form-label"><strong>Nome</strong></label>
                        <input type="text" className="form-control" name="name" id="name" onChange={handleChange}/>
                    </div>
                    <div className="form-group col-8 mb-3">
                        <label htmlFor="email" className="form-label"><strong>Email</strong></label>
                        <input type="email" className="form-control" name="email" id="email" onChange={handleChange} />
                    </div>
                    <div className="form-group col-8 mb-3">
                        <label htmlFor="contact" className="form-label"><strong>Telefone</strong></label>
                        <input type="text" className="form-control" name="contact" id="contact"
                         onKeyDown={()=>VMasker(document.getElementById('contact')).maskPattern('(99) 9999-9999')} onChange={handleChange}/>
                    </div>
                    <div className="form-group col-8 mb-3">
                        <label htmlFor="password" className="form-label"><strong>Senha</strong></label>
                        <input type="password" className="form-control" name="password" id="passwrod" onChange={handleChange} />
                    </div>
                    <div className="form-group col-8 mb-3">
                        <label htmlFor="repassword" className="form-label"><strong>Repita a Senha</strong></label>
                        <input type="password" className="form-control" name="repassword" id="repassword" onChange={handleChange} />
                    </div>
                    <div className="col-8 mt-4 mb-5">
                        <button type="submit" className="btn btn-success float-end ">{loading ? 'Salvando':'Salvar'}</button> 
                    </div>

                </div>
            </form>
        </div>
    );
};

export default FormUserAdd;