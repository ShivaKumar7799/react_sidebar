import React from 'react'
import { createContext, useState } from 'react'

export const AuthContext = createContext({})

function AuthProvider({children}) {
  const [auth, setAuth] = useState({

  })
  return (
    <div>
      <AuthContext.Provider value={{auth, setAuth}} >
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
