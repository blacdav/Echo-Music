import React from 'react'
import { faHome, faGripVertical, faUser, faAddressCard, faHeart, faClock } from '@fortawesome/free-solid-svg-icons'
import { faSquarePlus, faCirclePlay } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Sidebar = () => {
  return (
    <main>
      <div className='grid w-full h-screen px-5 py-8 bg-slate-800 text-white'>
        <h1>Echo Music</h1>

        <ul className='flex flex-col gap-4 *:flex *:items-center *:gap-2'>
            <li>
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
            <li>
                <FontAwesomeIcon icon={faAddressCard} />
                <p>Albums</p>
            </li>
        </ul>

        <ul className='flex flex-col gap-4 *:flex *:items-center *:gap-2'>
            <li>
                <FontAwesomeIcon icon={faHeart} />
                <p>Favourites</p>
            </li>
            <li>
                <FontAwesomeIcon icon={faClock} />
                <p>Recently Plays</p>
            </li>
        </ul>

        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-between'>
                <h2>Playlists</h2>
                <FontAwesomeIcon icon={faSquarePlus} />
            </div>
            <div className='flex items-center gap-2'>
                <FontAwesomeIcon icon={faCirclePlay} />
                <p>Rock & Roll</p>
            </div>
            <div className='flex items-center gap-2'>
                <FontAwesomeIcon icon={faCirclePlay} />
                <p>Rock & Roll</p>
            </div>
            <div className='flex items-center gap-2'>
                <FontAwesomeIcon icon={faCirclePlay} />
                <p>Rock & Roll</p>
            </div>
            <div className='flex items-center gap-2'>
                <FontAwesomeIcon icon={faCirclePlay} />
                <p>Rock & Roll</p>
            </div>
        </div>
      </div>
    </main>
  )
}

export default Sidebar
