import React, { FC } from 'react'
import { WrapperPortion, WrapperPortions, WrapperProfile } from '../ui/WrapperProfile'
import { PortionsCounter } from '../ui/PortionsCounter'
import { ButtonC } from '../ui/ButtonC'
const MyCounter : FC<any> = ({nombre}) => {
    const suma =  () => {
        console.log('suma 1', nombre)
      }
      const resta =  () => {
        console.log('resta 1', nombre)
      }
  return (
    <WrapperPortion>
    <span>{ nombre }</span>
    <PortionsCounter> <ButtonC onClick={suma}>+</ButtonC> <span> 5 </span> <ButtonC onClick={resta}>-</ButtonC>  </PortionsCounter>
</WrapperPortion>
  )
}

export default MyCounter