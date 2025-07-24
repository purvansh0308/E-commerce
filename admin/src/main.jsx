import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import Authcontext from './context/Authcontext.jsx'
import AdminContext from './context/AdminContext.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <Authcontext> 
    <AdminContext>
    <App />
    </AdminContext>
    </Authcontext>
    </BrowserRouter>
  ,
)
