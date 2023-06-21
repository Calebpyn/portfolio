import {AiOutlineCloseCircle} from 'react-icons/ai'
import {useContext} from 'react'
import windowState from '../contexts/windowState'

function Burger() {

    const context = useContext(windowState);

    const isClosed = context?.isClosed;
    const toggleClosed = context?.toggleClosed;

    const handleToggle = () => {
        if(toggleClosed){
            toggleClosed()
        }
    }



    // const [close, setClose] = useState<boolean>(false)

    // const handleClosing = () => {
    //     setClose(true)
    // }

  return (
    <div className={isClosed ? "absolute backdrop-blur-md h-screen w-1/2 translate-x-[100%] transitions top-0 md:w-1/5 md:translate-x-[250%]":"absolute backdrop-blur-md h-screen w-1/2 transitions top-0 md:w-1/5 md:translate-x-[150%]"}>

        <div className="h-3/5 flex flex-col justify-between text-white font-extrabold p-10">

            <div className="flex justify-start">
                <button><AiOutlineCloseCircle className='text-white hover:scale-110 transitions' size={30} onClick={() => handleToggle()}/></button>
            </div>

            <button className='transitions hover:scale-110'>PORTFOLIO</button>
            <button className='transitions hover:scale-110'>ABOUT</button>
            <button className='transitions hover:scale-110'>RESUME</button>
            <button className='transitions hover:scale-110'>CONTACT</button>
            <button className='transitions hover:scale-110'>GITHUB</button>

        </div>


    </div>
  )
}

export default Burger