import { Button } from "../ui/Button"
import { Input } from "../ui/Input"
import { Label } from "../ui/Label"
import { A } from "../ui/A"
import { Span } from "../ui/Span"
export const Login = () => {
  return (
    <>
    <Label >Email</Label>
    <Input></Input>
    <Label >Password</Label>
    <Input></Input>
    <A href="">Forgot Password ?</A>
    <Button>LOGIN</Button>
    <Span> Don`t you have an account ? <b><a href="">Register</a></b> </Span>
    </>
  )
}
