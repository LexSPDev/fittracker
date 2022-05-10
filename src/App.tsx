import styled from '@emotion/styled'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Login } from './components/Login'
import { Profile } from './components/Profile'
import { Portions } from './components/Portions'
import { Register } from './components/Register'
import { SetPortions } from './components/setPortions'
const Title = styled.h1`
  color: var(--primary);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`


function App()  {

  return (
    <>
      <Title><i className="ph-cooking-pot"></i>Fit Tracker</Title>
      <BrowserRouter>
        <Routes>
          <Route path='login' element={ <Login></Login> }/>
          <Route path='profile' element={ <Profile></Profile> }/>
          <Route path='portions' element={ <Portions></Portions> }/>
          <Route path='setportions' element={ <SetPortions></SetPortions> }/>
          
          <Route path='register' element={ <Register></Register> }/>
          <Route path='*' element={ <h2> 404 </h2> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;

