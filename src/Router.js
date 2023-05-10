import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Footer from './common/Footer'
import Header from './common/Header'
import PNF from './common/PNF'
import About from './component/About'
// import Form from './component/Form/Form'
import Home from './component/Home'
import Details from './component/Menu folder/Details/Details'
import Menu from './component/Menu folder/Menu/Menu'
import SubMenu from './component/Menu folder/Submenu/Submenu'
import Services from './component/Services'

const Routing = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='menu' element={<Menu />} />
        <Route path='menu/sub-menu/:menu_id' element={<SubMenu/>} />
        <Route path='menu/sub-menu/:menu_id/details/:sub_id' element={<Details/>} />

        <Route path='services' element={<Services />} />
        {/* <Route path='Form' element={<Form />} /> */}
        


        <Route path='*' element={<PNF />} />


      </Routes>
      <Footer />
    </Router>
  )
}

export default Routing