import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Recent from '../components/Recent'
import Trending from '../components/Trending'
import TopPlaylists from '../components/TopPlaylist'

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
        <div>
            <Recent />
            <div className='flex'>
                <div className='w-2/5'><Trending /></div>
                <div className='w-full'><TopPlaylists /></div>
            </div>
        </div>
      </div>
    </main>
  )
}

export default Dashboard
