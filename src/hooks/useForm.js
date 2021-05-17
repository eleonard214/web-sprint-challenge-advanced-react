// write your custom hook here to control your checkout form
import {useState} from 'react' 

export const useForm = (props) => {
    const [values, setValues]=useState(props);

    const handleChanges =(e)=> {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    return [values, handleChanges]
}
