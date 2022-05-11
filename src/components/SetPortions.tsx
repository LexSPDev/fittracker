import { useForm } from "react-hook-form";
import { MyInput } from "./MyInput";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FC } from "react";
import { Button } from "../ui/Button";
import { WrapperPortion } from "../ui/WrapperProfile";

export const SetPortions: FC<any> = () => {
    const valSchema = yup.object().shape({
        proteina: yup.number().typeError('Debe ser un número').positive('el numero deber ser positivo'),
        vegetales: yup.number().typeError('Debe ser un número').positive('el numero deber ser positivo'),
        frutas: yup.number().typeError('Debe ser un número').positive('el numero deber ser positivo'),
        cereales: yup.number().typeError('Debe ser un número').positive('el numero deber ser positivo'),
        grasaConProteina: yup.number().typeError('Debe ser un número').positive('el numero deber ser positivo'),
        grasaSinProteina: yup.number().typeError('Debe ser un número').positive('el numero deber ser positivo'),
        lacteos: yup.number().typeError('Debe ser un número').positive('el numero deber ser positivo'),
        endulzantes: yup.number().typeError('Debe ser un número').positive('el numero deber ser positivo'),
      })
  const { register, handleSubmit,formState: { errors } } = useForm({
    mode:'onBlur',
    resolver: yupResolver(valSchema)
  });;
  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <MyInput  id='proteina' 
                    type='text' 
                    name='proteina' 
                    label="Proteina" 
                    register={register}
                    error={errors.proteina}></MyInput>
        <MyInput  id='vegetales' 
                type='text' 
                name='vegetales' 
                label="Vegetales" 
                register={register}
                error={errors.vegetales}></MyInput>
        <MyInput  id='frutas' 
                type='text' 
                name='frutas' 
                label="Frutas" 
                register={register}
                error={errors.frutas}></MyInput>
        <MyInput  id='cereales' 
                type='text' 
                name='cereales' 
                label="Cereales" 
                register={register}
                error={errors.cereales}></MyInput>
        <MyInput  id='grasaConProteina' 
                type='text' 
                name='grasaConProteina' 
                label="Grasa con proteina" 
                register={register}
                error={errors.grasaConProteina}></MyInput>
        <MyInput  id='grasaSinProteina' 
                type='text' 
                name='grasaSinProteina' 
                label="Grasa sin proteina" 
                register={register}
                error={errors.grasaSinProteina}></MyInput>
        <MyInput  id='lacteos' 
                type='text' 
                name='lacteos' 
                label="Lacteos" 
                register={register}
                error={errors.lacteos}></MyInput>
        <MyInput  id='endulzantes' 
                type='text' 
                name='endulzantes' 
                label="Endulzantes" 
                register={register}
                error={errors.endulzantes}></MyInput>
        <WrapperPortion>
            <Button type="submit" > Guardar </Button>
        </WrapperPortion>
    </form>
  );
}