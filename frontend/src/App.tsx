import React from 'react'
import { Routes } from './router'
import { AuthContextProvider } from './contexts/AuthContexts'


function App() {

  return (
    <React.Fragment>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </React.Fragment>
  )
}

export default App
