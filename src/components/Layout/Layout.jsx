import React from 'react'

import Header from '../Header/Header'
import Routes from '../../routes/Routers.jsx'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <div>
        <Header/>
        <div>
            <Routes/>
        </div>
        <Footer/>
    </div>
  )
}

export default Layout

