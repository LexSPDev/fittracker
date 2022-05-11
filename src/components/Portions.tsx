import { LOButton } from '../ui/LOButton'
import { Nav } from '../ui/nav'
import { ProfilePic } from '../ui/ProfilePic'
import { Wrapper } from '../ui/Wrapper'
import { WrapperPortions, WrapperProfile } from '../ui/WrapperProfile'
import MyCounter from './MyCounter'

export const Portions = () => {
  const setPortions = (nombre: string) => {
    const porciones = [
      {nombre: 'Proteina', limite: 5, actual: 0, nombreBD: 'proteina'},
      {nombre: 'Vegetales', limite: 5, actual: 2, nombreBD: 'vegetales'},
      {nombre: 'Frutas', limite: 3, actual: 3, nombreBD: 'frutas'},
      {nombre: 'Cereales', limite: 5, actual: 5, nombreBD: 'cereales'},
      {nombre: 'Grasas sin proteina', limite: 3, actual: 0, nombreBD: 'grasasSinProteina'},
      {nombre: 'Grasas con proteina', limite: 2, actual: 0, nombreBD: 'grasasConProteina'},
      {nombre: 'Lacteos', limite: 3, actual: 1, nombreBD: 'lacteos'},
      {nombre: 'Endulzantes', limite: 3, actual: 4, nombreBD: 'endulzantes'},
  ]
  const porcion = porciones.filter(porciones => porciones.nombre === nombre)
  return porcion[0]
  }
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
          <MyCounter nombre='Proteina' datos={setPortions('Proteina')}></MyCounter>
          <MyCounter nombre='Vegetales' datos={setPortions('Vegetales')}></MyCounter>
          <MyCounter nombre='Frutas' datos={setPortions('Frutas')}></MyCounter>
          <MyCounter nombre='Cereales' datos={setPortions('Cereales')}></MyCounter>
          <MyCounter nombre='Grasas con proteina' datos={setPortions('Grasas con proteina')}></MyCounter>
          <MyCounter nombre='Grasas sin proteina' datos={setPortions('Grasas sin proteina')}></MyCounter>
          <MyCounter nombre='Lacteos' datos={setPortions('Lacteos')}></MyCounter>
          <MyCounter nombre='Endulzantes' datos={setPortions('Endulzantes')}></MyCounter>
        </WrapperPortions>
      </Wrapper>
    </div>
  )
}
