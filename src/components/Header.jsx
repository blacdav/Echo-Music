import React from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  return (
    <main className='grid items-center w-full h-20 bg-slate-400'>
      <div className='flex justify-between mx-5'>
        <div className='flex items-center gap-2 bg-slate-700 px-3 py-2 w-1/4 rounded-full'>
            <FontAwesomeIcon icon={faSearch} />
            <input type="search" className='w-full bg-slate-700 border-none outline-0' />
        </div>
        <div>
            <select name="" id="" className='bg-slate-700 w-full px-3 py-2 border-0 outline-0 rounded-full'>
                <option value="David">O david</option>
                <option value="David">O david</option>
                <option value="David">O david</option>
            </select>
        </div>
      </div>
    </main>
  )
}

export default Header
