import { Button } from "../ui/Button"
import { Input } from "../ui/Input"
import { Label } from "../ui/Label"
import { A } from "../ui/A"
import { Span } from "../ui/Span"
import { Layout } from "../ui/Layout"
export const Login = () => {
  return (
    <Layout>
    <Label >Email</Label>
    <Input></Input>
    <Label >Password</Label>
    <Input></Input>
    <A href="">Forgot Password ?</A>
    <Button>LOGIN</Button>
    <Span> Don`t you have an account ? <b><a href="">Register</a></b> </Span>
    </Layout>
  )
}
