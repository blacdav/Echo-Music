import React from 'react'
import { faHome, faGripVertical, faUser, faAddressCard, faHeart, faClock, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faSquarePlus, faCirclePlay } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAPI } from '../context/API'

const Sidebar = () => {
    const { albums, theme, visible, setVisible } = useAPI();
  return (
    <>
        <main className='w-full hidden md:flex'>
            <div className={`${theme ? 'bg-slate-950' : 'bg-slate-200'} font-semibold grid w-full h-screen px-5 py-8 transform duration-1000`}>
            <h1>Echo Music</h1>

            <ul className='flex flex-col gap-4 *:flex *:items-center *:gap-2 *:hover:cursor-pointer'>
                <li onClick={() => setVisible(false)}>
                    <FontAwesomeIcon icon={faHome} />
                    <p>Home</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faGripVertical} />
                    <p>Genres</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faUser} />
                    <p>Artists</p>
                </li>
                <li onClick={() => setVisible(true)}>
                    <FontAwesomeIcon icon={faAddressCard} />
                    <p>Albums</p>
                </li>
            </ul>

            <ul className='flex flex-col gap-4 *:flex *:items-center *:gap-2 *:hover:cursor-pointer'>
                <li>
                    <FontAwesomeIcon icon={faHeart} />
                    <p>Favourites</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faClock} />
                    <p>Recently Plays</p>
                </li>
            </ul>

            <div className='flex flex-col'>
                <div className='flex items-center justify-between'>
                    <h2>Playlists</h2>
                    <FontAwesomeIcon icon={faSquarePlus} className='hover:cursor-pointer' />
                </div>
                <div className='grid gap-2'>
                    {
                        albums.slice(0, 4).map((res) => {
                            <div key={res.id} className='flex items-center gap-2 hover:cursor-pointer'>
                                {/* <FontAwesomeIcon icon={faCirclePlay} /> */}
                                <p>{res.name}</p>
                            </div>
                        })
                    }
                </div>
            </div>
            </div>
        </main>

        {/* This is the mobile navigation */}
        <main className='w-screen h-16 fixed bottom-0 py-5 grid md:hidden bg-blue-900'>
            <div>
                <ul className='grid grid-cols-5 px-10 *:flex *:justify-center'>
                    <li>
                        <FontAwesomeIcon icon={faHome} className='hover:cursor-pointer' />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faGripVertical} className='hover:cursor-pointer' />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faSearch} className='hover:cursor-pointer' />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faHeart} className='hover:cursor-pointer' />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faUser} className='hover:cursor-pointer' />
                    </li>
                </ul>
            </div>
        </main>
    </>
  )
}

export default Sidebar
