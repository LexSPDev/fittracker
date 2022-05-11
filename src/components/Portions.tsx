import { ButtonC } from '../ui/ButtonC'
import { LOButton } from '../ui/LOButton'
import { Nav } from '../ui/nav'
import { PortionsCounter } from '../ui/PortionsCounter'
import { ProfilePic } from '../ui/ProfilePic'
import { Wrapper } from '../ui/Wrapper'
import { WrapperPortion, WrapperPortions, WrapperProfile } from '../ui/WrapperProfile'
import MyCounter from './MyCounter'

export const Portions = () => {

  return (
    <div>
      <Nav> 
          <div>USER NAME</div>
          <LOButton> LOGOUT</LOButton>
      </Nav>
      <Wrapper>
        <WrapperProfile>
          <ProfilePic src='https://pbs.twimg.com/media/FNUzhfGXwAIav-o?format=jpg&name=small'></ProfilePic>
          <span>06/05/2022</span>
        </WrapperProfile>
        <WrapperPortions>
          <MyCounter nombre='Proteina'></MyCounter>
          <MyCounter nombre='Vegetales'></MyCounter>
          <MyCounter nombre='Frutas'></MyCounter>
          <MyCounter nombre='Cereales'></MyCounter>
          <MyCounter nombre='Grasas con proteina'></MyCounter>
          <MyCounter nombre='Grasas sin proteina'></MyCounter>
          <MyCounter nombre='Lacteos'></MyCounter>
          <MyCounter nombre='Endulzantes'></MyCounter>
        </WrapperPortions>
      </Wrapper>
    </div>
  )
}
