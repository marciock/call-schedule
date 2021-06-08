import {useState} from 'react';


const useForm=(callback)=>{
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

}
export default useForm;