import React, { createContext } from 'react'
export const authDataContext = createContext()
function Authcontext({children}) {
   let serverUrl = "https://e-commerce-backend-cc1v.onrender.com"
   let value ={
        serverUrl
    }
    return (  
    <div>
      <authDataContext.Provider value={value}>
        {children}
      </authDataContext.Provider>
    </div>
  )
}

export default Authcontext
