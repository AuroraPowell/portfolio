"use client"; 

import { useState, useEffect } from 'react'    
import eventData from '../../database/data.json'
import Modal from './modal.jsx'
import { BsPeopleFill } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { RiEdit2Fill } from "react-icons/ri";
import { IoIosCheckmarkCircle } from "react-icons/io";
import moment from 'moment'


//TASKS IN THIS CODE: 

    // ** ** ** URGENT ** ** ** 
    //      Please fix the user.going.length issue on RSVP buttons. 
    //      Please & thnkyw

    // CREATE A FUNCTIONAL CREATE POST BUTTON
    // BE ABLE TO SEARCH THROUGH LISTED EVENTS
    // BEAUTIFY

function EventList(){

    // for each event in list, show title, location, rsvp list and edit availabilty 
    // json object stores information, updated as necessary. 
    // main values: yes, no, maybe, plus ones, 
    // (OPTIONAL: conditional settings for posts capping or restricting plus ones)
    
    const [loading, setLoading] = useState(false)

    //set modal states
    const [open, setOpen] = useState(false);
    const [eventFocus, setEventFocus] = useState()

    const [openCreate, setOpenCreate] = useState(false)
    // const [createFocus, setCreateFocus] = useState(false)

    const [toggleGoing, setToggleGoing] = useState(true)

    var arr = eventData

    const ListEvents = () => {
        

        const [name, setName] = useState("Event")
        const [desc, setDesc] = useState("Desc")
        const [date, setDate] = useState( )
        const [loc, setLoc] = useState("Loc")   

        const [going, setGoing] = useState([])
        const [notGoing, setNotGoing] = useState([])
       
        
        
        let listOfEvents = (
            eventData.map((event) => {
                return(
                <div className='rounded-lg flex flex-row justify-center items-center p-6 pt-9 gap-3'>
                    
                    {/* Event Info */}
                    <div className='flex bg-white flex-col justify-center p-9 rounded-2xl gap-3 min-w-3.5'>
                        <div className='bg-green-400 rounded-md justify-around inline-flex flex-nowrap 
                            text-xl sm:text-sm md:text-md font-bold'>
                            <h2>{event.name}</h2>
                            <h2>{event.date}</h2>
                            <h2>{event.loc}</h2>
                        </div>
                
                        <h1 className='w-5/6 m-3 text-transparent bg-clip-text bg-gradient-to-b from-black to-slate-400'>{event.desc}</h1>
                        <button>Read More</button>
                    </div>
            
                    {/* RSVP count and Edit RSVP button */}
                    <div className='flex flex-col text-xl gap-8'>
                    
                        <div className='flex flex-col text-white gap-3 justify-center items-center p-9'>
                            
                            <button 
                                onClick={() => ( setToggleGoing(true),setEventFocus(event), setOpen(true) )} 
                                className='bg-green-500 rounded-lg inline-flex p-3 gap-1 cursor-pointer'>
                            <BsPeopleFill /> {
                                event.rsvp.users.map((user)=> {
                                    if(user.going == true){
                                        going.push(user)
                                    }
                                    
                                } )}{going.length}
                            </button>
                            <button 
                                onClick={() => ( setToggleGoing(false), setEventFocus(event), setOpen(true) )}
                                className='bg-red-400   rounded-lg inline-flex p-3 gap-1 cursor-pointer'>
                            <BsPeople /> {
                                event.rsvp.users.map((user)=> {
                                    if(user.going == false){
                                        notGoing.push(user)
                                    }
                                    
                                } )}{notGoing.length}
                            </button>
                
                            {/* <button 
                                className='bg-purple-400 rounded-lg inline-flex p-4 cursor-pointer'>
                            <RiEdit2Fill />
                            </button>  */}
                        </div>
                    </div>
                            
            </div>)
            })
        ) 

        
        
        const handleNewSubmit = () => {

            var formatDate = moment(date).format('MMM D YYYY')

            var event = {
                "name": name,
                "creator": "will implement later B)",
                "desc": desc,
                "date": formatDate,
                "loc": loc,
                "rsvp": {
                    "users": [
                        {
                            "name": "Aurora",
                            "user": "will implement later B)",
                            "going": true
                        }
                    ]
                }
            }

            
            // THIS NEEDS TO WRITE DIRECTLY TO '../../database/data.json'
             //>it will fix ALL your problem

            // console.log(arr)
            // arr.push(event)
            // console.log("after submitting: " + arr)
            // setOpenCreate(false)
       
        }
        
        
        // useEffect(() => {
        // },[arr])

        return(
            <div>
                {listOfEvents}

                {/* RSVP List Modal */}
                {eventFocus ? (<Modal open={open} onClose={() => setOpen(false)}>
                                    <div className='border-2 flex flex-col p-3 min-w-full min-h-full font-bold text-2xl text-lime-500 bg-white rounded-2xl'>
                                        
                                    {/* Event Name */}
                                        <div className='px-3 rounded-tl-3xl rounded-tr-3xl flex flex-inline justify-around items-center text-white bg-gray-400 min-h-12'>
                                            {eventFocus.name}
                                        </div>
                                        <div className='bg-gray-500 rounded-br-3xl rounded-bl-3xl'>
                                            <div className='flex flex-col items-center  rounded-full m-auto p-3 gap-3 text-lime-500'>
                                            
                                    {/* Shows who's going */}
                                                {toggleGoing ? <h1 className='bg-white border-2 border-black text-black p-1 rounded-xl font-bold'>Going:</h1> 
                                                    : <h1 className='bg-black text-white p-1 rounded-xl font-bold'>Not Going:</h1>}
                                                <ul 
                                                    className='border-2 rounded-xl p-3 list-none flex flex-col gap-3'>
                                                    {
                                                        toggleGoing ? 
                                                            (
                                                                eventFocus.rsvp.users.map((user) => {
                                                                    if(user.going == true)
                                                                        return (
                                                                        <div className='text-lime-500 bg-white rounded-xl p-2 flex gap-1 flex-inline items-center'>
                                                                            <IoIosCheckmarkCircle /> <li key={user.name}>{user.name}</li>
                                                                        </div>)
                                                                })
                                                            ) :
                                                            (   
                                                                eventFocus.rsvp.users.map((user) => {
                                                                    if(user.going == false)
                                                                        return (
                                                                        <div className='text-red-400 gap-1 bg-black rounded-xl p-2 bg-cover flex flex-inline items-center'>
                                                                            <IoIosCheckmarkCircle /> <li key={user.name}>{user.name}</li>
                                                                        </div>)
                                                                })  
                                                            )
                                                    }
                                                </ul>

                                            </div>
                                        </div>
                                    </div>
                                </Modal> ) : "" }

                {/* Create Event Modal */}
                { openCreate ? (
                    <Modal open={openCreate} onClose={() => setOpenCreate(false)}>

                    {/* Includes Forms to create event and button to send it to JSON file */}
                        <div className='bg-fuchsia-400 rounded-xl border-2 p-3 w-[500px]'>
                            <div className='flex flex-col items-center justify-center p-9 rounded-xl border-2 bg-white w-5xl w-full'>
                                <div className='flex flex-row'>
                                    <input 
                                        className='focus:outline-none rounded-sm p-1' 
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        autoFocus placeholder='Event Name'></input>
                                    <input 
                                        type='date'
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        className='focus:outline-none rounded-sm p-1' 
                                        placeholder='Event Date'></input>
                                </div>

                                <div className='flex flex-row'>
                                    <input
                                        className='focus:outline-none rounded-sm p-1 span w-full' 
                                        value={loc}
                                        onChange={(e)=>setLoc(e.target.value)}
                                        placeholder='Event Location'></input>
                                    <input 
                                        className='focus:outline-none rounded-sm p-1' 
                                        value={desc}
                                        onChange={(e) => setDesc(e.target.value)}
                                        placeholder='Event Description'></input>
                                        <button 
                                            onClick={() =>
                                                handleNewSubmit()}
                                            className='bg-fuchsia-600 rounded-md p-3'>Submit</button>
                                    </div>
                            </div>
                        </div>
                    </Modal>) : "" }
            </div>
        )
    }

    return (
        <div className='flex flex-col sm:text-sm md:text-md'>
        {/* <button onClick={handleClick}>
            Click here
        </button> */}
        
        <div className='pt-10 pb-5 flex-col mx-auto'>
            {/* Events Component Header */} 
                <div className='bg-pink-400 opacity-80 w-fit rounded-t-lg rounded-b-lg flex flex-col justify-center items-center'> 
                    <>
                        <div className='flex justify-between items-center p-3 gap-3'>
                            <h1 className='text-white font-bold text-center text-3xl '>Events</h1>
                            <button 
                                onClick={() => ( setEventFocus(),  setOpenCreate(true) )}
                                className='text-gray-900 font-bold bg-lime-400 px-5 rounded-full'>
                                Create Event
                            </button>
                            <input className='focus:outline-none rounded-sm p-1' autoFocus></input>
                        </div>
                    </> 
                    <div className='bg-lime-400 rounded-b-lg'>
                        {!loading ? (<ListEvents />) : " loading... "}
                    </div>
                </div>
        </div>
        <div className='bottom-0 flex flex-col text-center text-white gap-2'>
            <h1 className='text-lg'>Built by Aurora Powell, 2024</h1>
            <h2 className='text-md'>Built with React JS and TailwindCSS</h2>
        </div>

        
        </div>
    )
}

export default EventList