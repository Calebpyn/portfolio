import {AiOutlineCloseCircle} from 'react-icons/ai'
import {useContext} from 'react'
import windowState from '../contexts/windowState'
import {useNavigate} from 'react-router-dom'

interface burguerProps {
    isBgW: boolean;
}

function Burger(props: burguerProps) {

    const context = useContext(windowState);

    const isClosed = context?.isClosed;
    const toggleClosed = context?.toggleClosed;

    const handleToggle = () => {
        if(toggleClosed){
            toggleClosed()
        }
    }


    const fontColor = {
        color: !props.isBgW ? 'white' : 'white'
    }


    const navigate = useNavigate()

  return (
    <div className={isClosed ? "absolute backdrop-blur-md h-screen w-1/2 translate-x-[100%] transitions top-0 md:w-1/5 md:translate-x-[250%]":"absolute bg-black/[.6] backdrop-blur-md h-screen w-1/2 transitions top-0 md:w-1/5 md:translate-x-[150%]"}>

        <div className="h-3/5 flex flex-col justify-between font-extrabold p-10" style={fontColor}>

            <div className="flex justify-start">
                <button><AiOutlineCloseCircle className='hover:scale-110 transitions' size={30} onClick={() => {
                    handleToggle()
                }}/></button>
            </div>

            <button className='transitions hover:scale-110' onClick={() => {
                navigate('/portfolio')
                handleToggle()
            }}>PORTFOLIO</button>
            <button className='transitions hover:scale-110'>ABOUT</button>
            <button className='transitions hover:scale-110'>RESUME</button>
            <button className='transitions hover:scale-110'>CONTACT</button>
            <button className='transitions hover:scale-110'>GITHUB</button>

        </div>


    </div>
  )
}

export default Burger