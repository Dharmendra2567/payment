
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PaymentSuccess from './pages/PaymentSuccess'
import PaymentFailure from './pages/PaymentFailure'
import PayBtn from './pages/PayBtn'

const MyRoutes = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PayBtn/>}/>
                <Route path='/checkout-success' element={<PaymentSuccess/>}/>
                <Route path='/checkout-error' element={<PaymentFailure/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default MyRoutes