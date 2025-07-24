import React, { useContext } from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Add from './pages/Add'
import List from './pages/List'
import Login from './pages/Login'
import Ordes from './pages/Ordes'
import { adminDataContext } from './context/AdminContext'
import {ToastContainer,toast} from 'react-toastify'
function App() {
  let {adminData} = useContext(adminDataContext)
  return (
    <>
    { !adminData ? <Login/> : <>
    <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home/>} />
         <Route path='/add' element={<Add/>} />
          <Route path='/list' element={<List/>} />
           <Route path='/login' element={<Login/>} />
            <Route path='/orders' element={<Ordes/>} />
      </Routes>
      </>
}
    </>
  )
}

export default App
