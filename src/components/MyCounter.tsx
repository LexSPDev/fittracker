import { FC, useState } from 'react'
import { Error, WrapperPortion } from '../ui/WrapperProfile'
import { PortionsCounter } from '../ui/PortionsCounter'
import { ButtonC } from '../ui/ButtonC'
import styled from "@emotion/styled";

export const Wrapper = styled.span`
@media (min-width: 600px) {
    display: flex;
    flex-direction: column;
}
`
const MyCounter : FC<any> = ({nombre, datos}) => {
    const [count, setCount] = useState(datos.actual);
    const suma =  () => {
        setCount(count + 1);
        error();
        console.log(error())
      }
      const resta =  () => {
          if(count > 0 ){
              setCount(count - 1);
          }
      }
    const error = () => {
        if(count < datos.limite){
            return false
        }
        if(count === datos.limite){
            return true
        }
        if(count > datos.limite){
            return true
        } 
    }
    const errorMessage = () => {

        if(count === datos.limite){
            return `Se alcanzo el limite de ${nombre}`
        }
        if(count > datos.limite){
            return `El limite de ${nombre} es de ${datos.limite}`
        } 
    }
  return (
      <Wrapper>
        <WrapperPortion>
            <span>{ nombre }</span>
            <PortionsCounter> 
                <ButtonC onClick={suma}>+</ButtonC> 
                <span> {count} </span> 
                <ButtonC onClick={resta}>-</ButtonC>  
            </PortionsCounter>
        </WrapperPortion>
            {error() && <Error>{errorMessage()}</Error>}
      </Wrapper>
  )
}

export default MyCounter