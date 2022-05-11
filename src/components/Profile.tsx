import { LOButton } from '../ui/LOButton'
import { Nav } from '../ui/nav'
import { ProfilePic } from '../ui/ProfilePic'
import { Wrapper } from '../ui/Wrapper'
import { WrapperProfile, WrapperProfileBody } from '../ui/WrapperProfile'

export const Profile = () => {
  return (
    <div>      <Nav> 
    <div>USER NAME</div>
    <LOButton> LOGOUT</LOButton>
</Nav>
<Wrapper>
  <WrapperProfile>
    <ProfilePic src='https://pbs.twimg.com/media/FNUzhfGXwAIav-o?format=jpg&name=small'></ProfilePic>
    <span>Change profile photo</span>
  </WrapperProfile>
    <WrapperProfileBody>
      <div>
        <span>Nombre</span>
        <span>Alex Roque</span>
      </div>
      <div>
        <span>Email</span>
        <span>Alex@Roque.com</span>
      </div>
      <div>
        <span>Pasword</span>
        <i className='ph-caret-right'></i>
      </div>
      <div>
        <span>Set portions</span>
        <i className='ph-caret-right'></i>
      </div>
    </WrapperProfileBody>
</Wrapper></div>
  )
}
