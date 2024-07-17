import { BsPeopleFill } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { RiEdit2Fill } from "react-icons/ri";


  // for each event in list, show title, location, rsvp list and edit availabilty 

function EventCard( {eventName, description, date, location, rsvp, imageURL} ){


  return(
    <>
        {/* Event Details */}
      <div className='bg-white rounded-lg w-fit flex flex-row justify-center items-center p-6 gap-5'>

        {/* Event Info */}
        <div className='flex flex-col justify-center gap-3 w-fit'>
          <div className='bg-green-400 rounded-md justify-around inline-flex flex-nowrap text-xl sm:text-sm md:text-md font-bold min-w-fit'>

            <h1>{eventName}</h1>
            <h2>{date}</h2>
            <h2>{location}</h2>
          </div>

          <h1 className='line-clamp-5 m-3'>{description}</h1>

        </div>

        {/* Event Image and RSVP count and Edit RSVP button */}
        <div className='flex flex-col text-xl gap-8'>
          <img className='max-w-60 max-h-60 rounded-3xl' src={imageURL}></img>  
          <div className='flex flex-row text-white gap-3 p-3 justify-center items-center'>

            {/* include condition if there are no RSVPs to show different icon than checkmark */}
            
            <button id='openModal' className='bg-green-500 rounded-lg inline-flex p-3 gap-1 cursor-pointer'>
              <BsPeopleFill /> {rsvp.users.length}
            </button>

            <button id='openModal' className='bg-red-400   rounded-lg inline-flex p-3 gap-1 cursor-pointer'>
              <BsPeople />{rsvp.users.length}
            </button>

            <button id='openModal' className='bg-purple-400 rounded-lg inline-flex p-3 cursor-pointer'>
              <RiEdit2Fill />
            </button>
          </div>
        </div>

      </div>
    </>
  )
}


export default EventCard;