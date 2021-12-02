import React from 'react'

import GlobalStyles from './styles/GlobalStyles'
import { ToastProvider } from 'react-toast-notifications'
import { AuthProvider } from './context/AuthContext'
import { Layout } from './components/UiComponents/Layout'
import { Sidebar } from './components/UiComponents/Sidebar'
import { Routes } from './routes'

function App () {
  return (
    <AuthProvider>
      <ToastProvider autoDismiss autoDismissTimeout={4500}>
      <GlobalStyles />
      <Layout>
        <Sidebar />
        <Routes />
      </Layout>
      </ToastProvider>
    </AuthProvider>
  )
}

export default App
