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
    <main className='grid grid-cols-6'>
      <div className='col-span-1 hidden md:flex w-full'>
        <Sidebar />
      </div>
      <div className='col-span-4 w-full md:w-4/5'>
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
        <div className='w-full md:w-4/5'>
            <MusicPanel />
        </div>
      </div>
    </main>
  )
}

export default Dashboard
