import React, { createContext, useEffect, useState } from 'react'

import api from '../services/api'

interface IHandleSingIn {
  email: string,
  password: string
}

interface AuthContextType {
  authenticated: boolean,
  handleSingIn: ({ email, password }: IHandleSingIn) => Promise<void>
  handleSignOut: () => void
}

export const AuthContext = createContext({} as AuthContextType)

export const AuthProvider: React.FC = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    try {
      const token = localStorage.getItem('token')

      if (token) {
        api.defaults.headers.Authorization = `${token}`
        setAuthenticated(true)
      }
    } catch (error) {
      setAuthenticated(false)
    }
  }, [])

  async function handleSingIn ({ email, password }: IHandleSingIn) {
    try {
      const { data: token } = await api.post('/login', {
        email,
        password
      })
      localStorage.setItem('token', token)
      api.defaults.headers.Authorization = `Bearer ${token.token}`
      setAuthenticated(true)
    } catch (error) {
      setAuthenticated(false)
    }
  }

  async function handleSignOut () {
    localStorage.removeItem('token')
    setAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ authenticated, handleSingIn, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  )
}
