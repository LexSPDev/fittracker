import { ButtonC } from '../ui/ButtonC'
import { LOButton } from '../ui/LOButton'
import { Nav } from '../ui/nav'
import { ProfilePic } from '../ui/ProfilePic'
import { Wrapper } from '../ui/Wrapper'
import { WrapperPortion, WrapperPortions, WrapperProfile } from '../ui/WrapperProfile'

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
        <WrapperPortion>
            <span>Proteina</span>
            <span> <ButtonC>+</ButtonC> <span> 5 </span> <ButtonC>-</ButtonC>  </span>
        </WrapperPortion>
        <WrapperPortion>
            <span>Vegetales</span>
            <span> <ButtonC>+</ButtonC> <span> 5 </span> <ButtonC>-</ButtonC>  </span>
        </WrapperPortion>
        <WrapperPortion>
            <span>Frutas</span>
            <span> <ButtonC>+</ButtonC> <span> 5 </span> <ButtonC>-</ButtonC>  </span>
        </WrapperPortion>
        <WrapperPortion>
            <span>Cereales</span>
            <span> <ButtonC>+</ButtonC> <span> 5 </span> <ButtonC>-</ButtonC>  </span>
        </WrapperPortion>
        <WrapperPortion>
            <span>Grasa con proteina</span>
            <span> <ButtonC>+</ButtonC> <span> 5 </span> <ButtonC>-</ButtonC>  </span>
        </WrapperPortion>
        <WrapperPortion>
            <span>Grasa sin proteina</span>
            <span> <ButtonC>+</ButtonC> <span> 5 </span> <ButtonC>-</ButtonC>  </span>
        </WrapperPortion>
        <WrapperPortion>
            <span>Lacteos</span>
            <span> <ButtonC>+</ButtonC> <span> 5 </span> <ButtonC>-</ButtonC>  </span>
        </WrapperPortion>
        <WrapperPortion>
            <span>Endulzantes</span>
            <span> <ButtonC>+</ButtonC> <span> 5 </span> <ButtonC>-</ButtonC>  </span>
        </WrapperPortion>
        </WrapperPortions>
      </Wrapper>
    </div>
  )
}
