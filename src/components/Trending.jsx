import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faCirclePause } from '@fortawesome/free-regular-svg-icons'
import { useAPI } from '../context/API'

const Trending = () => {
  const { tracks } = useAPI();

  // console.log(tracks)
  
  return (
    <main className='w-screen md:w-full px-5 md:ps-5 md:pe-1 p-3 pt-5 text-xs'>
      <div>
        <h1 className='text-sm md:text-lg mb-3 font-bold'>Trending</h1>
        <div className='grid gap-3 min-h-full w-full overflow-y-scroll no-scrollba'>
          {
            tracks.map((res) => (
              <div key={res.id} className='flex justify-between pb-2 border-b border-black md:border-none'>
                <div className='flex gap-2 items-center'>
                    <img src={res.image} alt={res.image} className='bg-red-400 border h-16 w-16 rounded-md' />
                    <div>
                        <h3 className='font-bold'>{res.name}</h3>
                        <p>{res.artist_name}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <p>3:45</p>
                    <div className='text-lg'>
                      <FontAwesomeIcon icon={faCirclePlay} className={`hidde`} />
                      <FontAwesomeIcon icon={faCirclePause} className={`hidden`}/>
                    </div>
                </div>
            </div>
            ))
          }
        </div>
      </div>
    </main>
  )
}

export default Trending
