import React, {Fragment} from 'react';
import { useForm } from 'react-hook-form';


const AddUserForm = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        console.log(data);
        props.addUser(data);
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name:</label>
                <input type="text" name="name"
                {...register("name", { required: true, maxLength: 100})}/>
                {errors.nombre?.type === 'required' && "Este es un Campo Requerido"}
                {errors.nombre?.type === 'maxLength' && "El Maximo de Caracteres es de 100"}

                <label>UserName:</label>
                <input type="text" name="username"
                {...register("username", { required: true, maxLength: 100})}/>
                {errors.nombre?.type === 'required' && "Este es un Campo Requerido"}
                {errors.nombre?.type === 'maxLength' && "El Maximo de Caracteres es de 100"}
                
                <button>Add new User</button>
            </form>
        </Fragment> 
     );
}
 
export default AddUserForm;