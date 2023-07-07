import React from 'react'
import { Button, FormControl, FormGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import {useForm} from 'react-hook-form'
const Login = () => {
  const {register,handleSubmit,formState:{errors},reset}=useForm();
  const onSubmit =(user)=>{
      console.log(user);
  }
  return (
    <div>
      <Form className='w-50 bg-info p-3 bg-opacity-25' onSubmit={handleSubmit(onSubmit)}> 
        <FormGroup>
          <Form.Label>Email</Form.Label>
          <FormControl 
          type='email'
          {...register("email",{
            required:"Hay que llenar el campo email es obligatorio",
            pattern:{
              value:/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/,
              message:"El formato del email es incorrecto!"
            }
          })}

          />
          <Form.Text className="text-danger">
            {errors.email?.message}
          </Form.Text>
        </FormGroup>
        <FormGroup>
          <Form.Label>Contraseña</Form.Label>
          <FormControl 
          type='password'
          {...register("password",{
            required:"hay que llenar el campo de la contraseña!"
          })}
          
          />
          <Form.Text className="text-danger">
            {errors.password?.message}
          </Form.Text>
        </FormGroup>
        <FormGroup>
          <Button type='submit'>Ingresar</Button>
          </FormGroup>
          
      </Form>
    </div>
  )
}

export default Login

