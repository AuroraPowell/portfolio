import modalBG from '../../assets/modalBG.jpg'
import { useState, useLayoutEffect } from 'react'

function Modal( modalState ){  



    return (
        <>
            <dialog 
                
                className='bg-white min-w-96 min-h-96'>
                Wonch
                <button>Close Modal</button>
            </dialog>
        </>
        // <div id="modal" className='flex flex-row min-h-screen justify-around'>
        //     <img src={modalBG} className='w-96 h-96 rounded-3xl -z-10'/>
        //     <div className='z-0'>
        //         <button> </button>
        //     </div>
        // </div>
    )
}

export default Modal