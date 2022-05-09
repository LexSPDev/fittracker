import { Button } from "../ui/Button"
import { Input } from "../ui/Input"
import { Label } from "../ui/Label"
import { Layout } from "../ui/Layout"
import { Span } from "../ui/Span"
export const Register = () => {
  return (
    <Layout>
      <Label >Email</Label>
      <Input></Input>
      <Label >Password</Label>
      <Input></Input>
      <Label >Confirm password</Label>
      <Input></Input>
      <Button>REGISTER</Button>
      <Span> Already have an account ? <b><a href="">Login</a></b> </Span>
    </Layout>
  )
}
