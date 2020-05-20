import React from 'react'
import { useForm } from 'react-hook-form';

const EditUserForm = props => {

    // console.log(props.currentUser)

    const{register, errors, handleSubmit, setValue} = useForm({
        defaultValues: props.currentUser
    });
    setValue('name', props.currentUser.name);
    setValue('username', props.currentUser.username);
    
    const onSubmit = (data, e) => {
        console.log(data)

        data.id=props.currentUser
        props.updateUser(props.currentUser.id,data)

        // limpiar campos
        e.target.reset();
    }
    
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input type="text" name="name"
        ref={register({
            required: {
                value: true, 
                message: 'Campo es requerido'
                }, 
            maxLength: {
                value: 20, 
                message: 'No más de 20 carácteres!'
                },
            minLength: {
                value: 2, 
                message: 'Mínimo 2 carácteres'
                }
        })}
        />
        <span className="text-danger text-small d-block mb-2">
            {errors.name && errors.name.message}
        </span>
        <label>Username</label>
        <input type="text" name="username" 
        ref={register({
            required: {
                value: true, 
                message: 'campo es requerido'
                }, 
            maxLength: {
                value: 20, 
                message: 'No más de 20 carácteres!'
                },
            minLength: {
                value: 2, 
                message: 'Mínimo 2 carácteres'
                }
        })} />
        <span className="text-danger text-small d-block mb-2">
            {errors.username && errors.username.message}
        </span>
        <button>Edit user</button>
      </form>
    )
  }
 
export default EditUserForm;