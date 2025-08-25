import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router'
import Container from '../components/Container'
import ThemeLayout from './ThemeLayout'

const MainLayout = () => {
  return (
    <Container>
        <ThemeLayout>
          {/* <Header /> */}
          <Outlet />
        </ThemeLayout>
    </Container>
  )
}

export default MainLayout