import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import DashBoard from './pages/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<DashBoard />} />
      </Routes>
    </>
  )
}

export default App
