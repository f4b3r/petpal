import React from 'react'
import { BrowserRouter,  Route, Router, Routes, useNavigate } from 'react-router-dom'
import Products from './components/Products'
import About from './components/About'
import SecuredRoute from './components/misc/SecuredRoute'
import Landing from './pages/landing'
import Nav from './components/nav'
import Dashboard from './pages/dashboard/Dashboard'
import Signup from './pages/signup/Signup'



function App() {


    return (

    <>

      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/secured2"
          element={
            <SecuredRoute>
              <Products />
            </SecuredRoute>
          }
        />
        <Route path="/dashboard" element={<SecuredRoute><Dashboard /></SecuredRoute>} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Signup />} />
      </Routes>

    </>

  );
}

export default App