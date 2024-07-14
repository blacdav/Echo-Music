import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Recent from '../components/Recent'
import Trending from '../components/Trending'
import TopPlaylists from '../components/TopPlaylist'
import MusicPanel from '../components/MusicPanel'
import Albums from './Albums'
import { useAPI } from '../context/API'

const Dashboard = () => {
  const { theme, setTheme, visible } = useAPI();
  const [loading, setLoading] = useState(true);
  // console.log(result)

  const delayPage = () => {
    setTimeout(() => {setLoading(false)}, 3000)
  }

  useEffect(() => {
    delayPage();
  }, [])

  if(loading){
    return(
      <div className='w-full bg-slate-900 h-screen flex flex-col gap-20 justify-center items-center'>
        <p className='text-5xl md:text-6xl font-bold text-slate-300'>Echo Music</p>
        <p className="loader"></p>
      </div>
    )
  }

  return (
    <main className={`${theme ? 'bg-slate-900 text-slate-300' : 'bg-slate-300 text-slate-800'} w-screen h-screen transform duration-1000`}>
      <main className='grid grid-cols-12 h-dvh text-sm'>
        <div className='col-span-2 hidden md:flex fixed md:relative bottom-0'>
          <Sidebar />
        </div>
        <div className={`${visible ? 'col-span-10 gap-5' : 'hidden'} h-full w-full overflow-scroll no-scrollbar`}>
          <Albums />
        </div>
        <div className={`${visible ? 'hidden' : ''} h-full w-full no-scrollbar col-span-12 md:col-span-10`}>
          <div className='fixed md:relative'>
              <Header />
          </div>
          <div className='h-screen md:h-fit overflow-y-scroll no-scrollbar'>
            <div className='pt-20 md:pt-0'>
              <Recent />
              <div className='grid w-full md:grid-cols-6 md:gap-5 pb-16 md:pb-0'>
                  <div className='md:col-span-2'><Trending /></div>
                  <div className='md:col-span-4'><TopPlaylists /></div>
              </div>
            </div>
            <div className='w-full absolute bottom-0'>
                {/* <MusicPanel /> */}
            </div>
          </div>
          <div className='w-screen pb-36 md:pb-0 flex md:hidden fixed bottom-0'>
            <Sidebar />
          </div>
        </div>
      </main>
    </main>
  )
}

export default Dashboard
