import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Recent from '../components/Recent'

const Dashboard = () => {
  return (
    <main className='flex'>
      <div className='w-1/5'>
        <Sidebar />
      </div>
      <div className='w-4/5'>
        <div>
            <Header />
        </div>
        <div className='h-1/3'>
            <Recent />
        </div>
      </div>
    </main>
  )
}

export default Dashboard
