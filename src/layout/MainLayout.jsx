import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router'
import Container from '../components/Container'

const MainLayout = () => {
  return (
    <Container>
        <div className="" 
        // style={{background: "#1C144D", minHeight: "100vh"}}
        >
        <Header />
        <Outlet />
        </div>
    </Container>
  )
}

export default MainLayout