import React from 'react'
import Header from '../layout/Header'
import { Outlet } from 'react-router'
import Footer from '../layout/Footer'
const MainRoot = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainRoot