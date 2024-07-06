import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const Dashboard = () => {
  return (
    <main className='flex'>
      <div className='w-1/5'>
        <Sidebar />
      </div>
      <div className='w-4/5'>
        <Header />
      </div>
    </main>
  )
}

export default Dashboard
