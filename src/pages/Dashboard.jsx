import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Recent from '../components/Recent'
import Trending from '../components/Trending'
import TopPlaylists from '../components/TopPlaylist'
import MusicPanel from '../components/MusicPanel'
import { useAPI } from '../context/API'

const Dashboard = () => {
  const { result } = useAPI();
  console.log(result)

  return (
    <main className='w-screen flex'>
      <div className='w-1/4 hidden md:flex'>
        <Sidebar />
      </div>
      <div className='w-full'>
        <div>
            <Header />
        </div>
        <div>
            <Recent />
            <div className='grid grid-cols-1 md:grid-cols-6 md:gap-10'>
                <div className='md:col-span-2'><Trending /></div>
                <div className='md:col-span-4'><TopPlaylists /></div>
            </div>
        </div>
        <div className='w-full'>
            <MusicPanel />
        </div>
      </div>
    </main>
  )
}

export default Dashboard
