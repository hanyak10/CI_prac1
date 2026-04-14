import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Agence from './Pages/Agence'
import Project from './Pages/Project'
import NAvbar from './Components/Navigation/NAvbar'
import FullScreenNavabar from './Components/Navigation/FullScreenNavabar'
import NavContext from './Context/NavContext'

const App = () => {
  return (
    <div >
      <NAvbar/>
      <FullScreenNavabar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projects' element={<Project />} />
      </Routes>
    </div>
  )
}

export default App
