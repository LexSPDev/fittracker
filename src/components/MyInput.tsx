import { FC } from "react"
import { Label } from "../ui/Label"
import { WrapperSetPortion, Error} from "../ui/WrapperProfile"

export const MyInput: FC<any> = ({register, error, label, id, ...inputProps}) => {    
  return (
    <>
    <WrapperSetPortion>
        <Label htmlFor={id}>{label}</Label>
        <input {...register(id)}
                id={id}
                {...inputProps}/>
    </WrapperSetPortion>
        {error && <Error>{error.message}</Error>}
    </>
  )
}
