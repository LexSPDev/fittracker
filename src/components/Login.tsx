import { Button } from "../ui/Button"
import { A } from "../ui/A"
import { Span } from "../ui/Span"
import { Layout } from "../ui/Layout"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FC } from "react";
import { useForm } from "react-hook-form";
import { WrapperPortion } from "../ui/WrapperProfile"
import { AuthInput } from "./AuthInput"
import  app, { db }  from '../firebase/firebase.config'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth(app)

export const Login: FC<any> = () => {
  const valSchema = yup.object().shape({
    email: yup.string().email('El formato es incorrecto').required('El campo es requerido'),
    password: yup.string().required('El campo es requerido'),
})
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode:'onBlur',
    resolver: yupResolver(valSchema)
  });
  const onSubmit = async (data: any) => {
    console.log(data)
      await signInWithEmailAndPassword(auth, data.email, data.password).then(
        (result) => {
            console.log('Se inicio sesion correctamente')
            console.log(result)
        })
        .catch((error)=>{
          console.log(error)
        })
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Layout>
      <AuthInput  id='email' 
                type='text' 
                name='email' 
                label="Email" 
                register={register}
                error={errors.email}></AuthInput>
      <AuthInput  id='password' 
                type='password' 
                name='password' 
                label="Contraseña" 
                register={register}
                error={errors.password}></AuthInput>
      <A href="">Forgot Password ?</A>
      <WrapperPortion>
            <Button type="submit" > Login </Button>
        </WrapperPortion>
      <Span> Don`t you have an account ? <b><a href="/register">Register</a></b> </Span>
      </Layout>
    </form>
  )
}
