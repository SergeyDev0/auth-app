import React from 'react'
import Auth from './pages/auth';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Auth />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
