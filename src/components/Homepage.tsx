import {BsArrowRightSquare} from 'react-icons/bs'
import Burger from './Burger'
import {useContext} from 'react'
import windowState from '../contexts/windowState'
import { useNavigate } from 'react-router-dom'

function Homepage() {

    //Context
    
    const context = useContext(windowState)

    const toggleClosed = context?.toggleClosed

    const handleToggle = () => {
        if(toggleClosed){
            toggleClosed()
        }
    }

    //Navigation

    const navigate = useNavigate()


    return (
    <div className="flex flex-col items-center justify-between w-full fixed h-screen">

        <div className='flex justify-end w-full p-4'>
            <div className='w-7 flex flex-col h-5 justify-between hover:cursor-pointer' onClick={() => handleToggle()}>
                <div className='bg-white h-[2px] w-full'></div>
                <div className='bg-white h-[2px] w-full'></div>
                <div className='bg-white h-[2px] w-full'></div>
            </div>
        </div>

        <div>
            <div className="flex flex-col text-[4.2rem] leading-none px-6">
                <span className="font-GeoL font-extrabold text-white">Hey,</span>
                <span className="font-GeoL font-extrabold text-white">I'm Caleb.</span>
            </div>

            <div className="flex justify-center mt-2">
                {/* <div className='py-2 px-5 backdrop-blur-md rounded-full'>
                    <span className="text-white tracking-widest text-lg font-medium">I'm a Web Developer.</span>
                </div> */}

                <span className="text-white tracking-widest text-lg font-medium">I'm a Web Developer.</span>
            </div>

            <div className="mt-5 flex justify-center">
                <button className="py-2 px-5 border-white border-2 rounded-full text-white font-Roboto tracking-wider flex items-center" onClick={() => navigate('/portfolio')}>
                <span className='mr-4 font-medium'>Work</span>
                <BsArrowRightSquare/>
                </button>
            </div>
        </div>
        
        <div>
            <Burger/>
        </div>
    </div>
  )
}

export default Homepage