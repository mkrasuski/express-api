import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './page/login'
import { TestPage } from './page/testPage'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<TestPage />} />
          <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
