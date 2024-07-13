import React from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAPI } from '../context/API'

const Header = () => {
  const { theme, setTheme } = useAPI();
  
  return (
    <main className={`${theme ? 'bg-slate-900 text-slate-300' : 'bg-slate-300 text-slate-800'} grid items-center w-screen md:w-full h-20 transform duration-1000`}>
      <div className='flex items-center justify-between px-5'>
        <p className='font-bold text-xl'>Echo Music</p>
        <div className='hidden items-center gap-2 bg-slate-700 px-3 py-2 w-1/2 md:w-1/4 rounded-full'>
            <FontAwesomeIcon icon={faSearch} />
            <input type="search" className='w-full bg-slate-700 border-none outline-0' />
        </div>
        <div className='flex gap-4 items-center'>
          <div className={`${theme ? 'bg-slate-300' : 'bg-slate-900'} w-11 md:w-16 h-6 rounded-full flex items-center p-1 transform duration-1000`}><div onClick={() => setTheme(!theme)} className={`${theme ? 'bg-slate-900' : 'translate-x-4 bg-slate-300'} h-5 w-5 rounded-full transform duration-1000`}></div></div>
            <select name="" id="" className={`${theme ? 'bg-slate-300 text-slate-800' : 'bg-slate-900 text-slate-300'} hidden md:flex w-full px-3 py-1 border-0 outline-0 rounded-full transform duration-1000`}>
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
