import react, { useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import CategoryBar from './components/CategoryBar'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import ProductDetails from './pages/productDetails'
import { AuthContextProvider } from './context/AuthContextProvider'
import { LoginPopUpContextProvider } from './context/LoginPopUpContextProvider'

function App() {

  return (
    <>
      <LoginPopUpContextProvider>
        <AuthContextProvider>
          <NavBar />
          <CategoryBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details/:id' element={<ProductDetails />} />
          </Routes>
          <Footer />
        </AuthContextProvider>
      </LoginPopUpContextProvider>
    </>
  )
}

export default App
