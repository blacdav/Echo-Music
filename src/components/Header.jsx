import React from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { useAPI } from '../context/API'

const Header = () => {
  // const { tracks } = useAPI();
  
  return (
    <main className='grid items-center w-screen md:w-full h-20 bg-slate-400'>
      <div className='flex items-center justify-between px-5'>
        <p className='font-bold text-xl'>Echo Music</p>
        <div className='hidden md:flex items-center gap-2 bg-slate-700 px-3 py-2 w-1/2 md:w-1/4 rounded-full'>
            <FontAwesomeIcon icon={faSearch} />
            <input type="search" className='w-full bg-slate-700 border-none outline-0' />
        </div>
        <div>
            <select name="" id="" className='bg-slate-700 w-full px-3 py-3 border-0 outline-0 rounded-full'>
                <option value="David">O david</option>
                <option value="David">A david</option>
                <option value="David">B david</option>
            </select>
        </div>
      </div>
    </main>
  )
}

export default Header
