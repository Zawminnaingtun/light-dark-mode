import React from 'react'
import ThemeProvider from './features/theme/components/ThemeProvider'
import './index.css'

const Layout = ({children}) => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme-preference">
      {children}
    </ThemeProvider>
  )
}

export default Layout