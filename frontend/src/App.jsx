import React from 'react'
import { Route,Routes,useLocation,Navigate } from 'react-router-dom'
import Registration from './pages/Registration'
import Home from './pages/Home'
import Login from './pages/Login'
import Nav from './component/Nav'
import About from './pages/About'
import { useContext } from 'react'
import { userDataContext } from './context/UserContext'
import Contact from './pages/Contact'
import Product from './pages/product'
import Collections from './pages/collections'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import { ToastContainer,toast } from 'react-toastify'
import Ai from './component/Ai'
function App() {
  let {userData} = useContext(userDataContext)

  let location = useLocation()
  return (
    <>
    {userData && <Nav/>}
     <ToastContainer/>
      <Routes>

         <Route path='/login' 
         element={userData ? (<Navigate to={location.state?.form || "/"}/>)
        :(<Login/>)
        }/>
         <Route path='/signup' element={userData ? (<Navigate to={location.state?.form || "/"}/>)
        :(<Registration/>)
        }/>
         
         <Route path='/'  element={userData ? <Home/> : <Navigate to="/login" state={{from: location.pathname}}/>
        }/>
         
         <Route path='/about'   element={userData ? <About/> : <Navigate to="/login" state={{from: location.pathname}}/>
        }/>
         
         <Route path='/contact'  element={userData ? <Contact/> : <Navigate to="/login" state={{from: location.pathname}}/>}/>
         
         <Route path='/product' element={userData ? <Product/> : <Navigate to="/login" state={{from: location.pathname}}/>
        }/>
         
         <Route path='/collections'  element={userData ? <Collections/> : <Navigate to="/login" state={{from: location.pathname}}/>
        }/>
         <Route path='/productdetail/:productId'  element={userData ? <ProductDetails/> : <Navigate to="/login" state={{from: location.pathname}}/>
        }/>
         <Route path='/cart'  element={userData ? <Cart/> : <Navigate to="/login" state={{from: location.pathname}}/>
        }/>
           <Route path='/placeorder'  element={userData ? <PlaceOrder/> : <Navigate to="/login" state={{from: location.pathname}}/>
        }/>
         <Route path='/orders'  element={userData ? <Orders/> : <Navigate to="/login" state={{from: location.pathname}}/>
        }/>
      </Routes>
        <Ai/>
    </>
  )
}

export default App