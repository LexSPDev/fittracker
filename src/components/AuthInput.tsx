import { FC } from 'react'
import { Input } from '../ui/Input'
import { Label } from '../ui/Label'
import { Error, WrapperPortion } from '../ui/WrapperProfile'

export const AuthInput: FC<any> = ({register, error, label, id, ...inputProps}) => {
  return (
      <>
      <Label htmlFor={id}>{label}</Label>
        <WrapperPortion>
            <Input {...register(id)}
                    id={id}
                    {...inputProps}/>
        </WrapperPortion>
      {error && <Error>{error.message}</Error>}
      </>
  )
}
