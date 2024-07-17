import { useState, useRef } from 'react'
import EventCard from './eventCard'
import eventData from '../../database/data.json'
import Modal from './modal.jsx'

function EventList(){

    const [loading, setLoading] = useState(false)
    // const [modalState, setModalState] = useState(false)


    
    // function action(){
    //     setModalState(!modalState)  
    //     console.log
    // }

    return (
        <>

        <div className='pt-10 flex-col inline-flex items-center'>
            <div className=' w-8/12 z-10'>
                <div className='bg-pink-400 opacity-80 w-fit rounded-t-lg rounded-b-lg flex flex-col'> 
                <>
                    <div className='flex justify-between p-3'>
                    <h1 className='text-white font-bold text-center text-3xl pl-px'>Events</h1>
                    <input className='focus:outline-none rounded-sm p-1' autoFocus></input>
                    </div>
                </>
                
                
                {/* Conditional Render of Events List */}
                <div className='bg-lime-400 rounded-b-lg'>
                    {loading
                    ? <p className='text-center text-white p-32'>No Events...</p>
                    : <div className='flex flex-col px-10 py-5 gap-8'>

                        {/* PLEASE DO FOREACH OR MAP THE ENTRIES OF DATA.JSON */}
                        <EventCard className='bg-white opacity-100' {...eventData}/>
                        <EventCard className='bg-white opacity-100' {...eventData}/>
                        <EventCard className='bg-white opacity-100' {...eventData}/>
                    </div>
                    }
                </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default EventList