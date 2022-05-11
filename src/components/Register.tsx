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
export const Register: FC<any> = () => {
  const valSchema = yup.object().shape({
    email: yup.string().email('El formato es incorrecto').required('El campo es requerido'),
    password: yup.string().required('El campo es requerido'),
    passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Los contraseñas no coinciden'),
})
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode:'onBlur',
    resolver: yupResolver(valSchema)
  });
  const onSubmit = (data: any) => console.log(data);
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
      <AuthInput  id='passwordConfirm' 
                type='passwordConfirm' 
                name='passwordConfirm' 
                label="Confirma contraseña" 
                register={register}
                error={errors.passwordConfirm}></AuthInput>
      <WrapperPortion>
            <Button type="submit" > Register </Button>
        </WrapperPortion>
      <Span> Already have an account ? <b><a href="/login">Login</a></b> </Span>
    </Layout>
    </form>
  )
}
