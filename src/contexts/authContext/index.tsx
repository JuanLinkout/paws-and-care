import React, { createContext, useContext, useState } from 'react'

import { AuthContextData } from './types'

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState()

  return (
    <AuthContext.Provider
      value={{
        user
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!Object.keys(context)?.length) {
    throw new Error('useAuth must be within an ContextoProvider')
  }

  return context
}

export { AuthProvider, useAuth }

