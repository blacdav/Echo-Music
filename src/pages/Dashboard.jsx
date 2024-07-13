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
  // console.log(result)

  return (
    <main className='grid grid-cols-12 w-screen h-screen text-sm'>
      <div className='col-span-2 w-full hidden md:flex fixed md:relative bottom-0'>
        <Sidebar />
      </div>
      <div className='col-span-10 w-full'>
        <div className='fixed md:relative'>
            <Header />
        </div>
        <div className=''>
          <div className='pt-20 md:pt-0'>
            <Recent />
            <div className='grid grid-cols-1 md:grid-cols-6'>
                <div className='md:col-span-2'><Trending /></div>
                <div className='md:col-span-4'><TopPlaylists /></div>
            </div>
          </div>
          <div className='w-full'>
              <MusicPanel />
          </div>
        </div>
        <div className='w-screen pb-36 md:pb-0 flex md:hidden'>
          <Sidebar />
        </div>
      </div>
    </main>
  )
}

export default Dashboard
