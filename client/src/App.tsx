import React from 'react'
//Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Components
import Ecommerce from './Ecommerce/Ecommerce'
import ProductDetails from './Ecommerce/ProductDetails'
import NotFound from './Ecommerce/NotFound'
import Navbar from './Navbar/Navbar'
import Auth from './Auth/Auth'

// Styles

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Ecommerce />} />
      <Route path="/:_id" element={<ProductDetails />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>

    {/* <GlobalStyle /> */}
  </Router>
)

export default App

