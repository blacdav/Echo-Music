import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Recent from '../components/Recent'
import Trending from '../components/Trending'
import TopPlaylists from '../components/TopPlaylist'
import MusicPanel from '../components/MusicPanel'

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
            <div className='grid grid-cols-6 gap-10'>
                <div className='col-span-2'><Trending /></div>
                <div className='col-span-4'><TopPlaylists /></div>
            </div>
        </div>
        <div className='w-4/5'>
            <MusicPanel />
        </div>
      </div>
    </main>
  )
}

export default Dashboard
