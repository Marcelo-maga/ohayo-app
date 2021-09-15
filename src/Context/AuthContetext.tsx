import React, { createContext, useEffect, useState } from 'react'
import api from '../services/api'

interface IHandleSingIn {
  email: string,
  password: string
}

interface AuthContextType {
  authenticated: boolean,
  handleSingIn: ({ email, password }: IHandleSingIn) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export const AuthProvider: React.FC = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
      setAuthenticated(true)
    }
  }, [])

  async function handleSingIn ({ email, password }: IHandleSingIn) {
    const { data: token } = await api.post('/login', {
      email,
      password
    })

    localStorage.setItem('token', JSON.stringify(token))
    api.defaults.headers.Authorization = `Bearer ${token}`
    setAuthenticated(true)
  }

  return (
    <AuthContext.Provider value={{ authenticated, handleSingIn }}>
      {children}
    </AuthContext.Provider>
  )
}
