import Homepage from "./Homepage"
import windowState from "../contexts/windowState"
import {useState} from 'react'

function Bg() {

  const [isClosed, setIsClosed] = useState<boolean>(true)

  const toggleClosed = () => {
    setIsClosed((prevClosed: boolean) => !prevClosed)
  }


  const contextValue = {
    isClosed,
    toggleClosed
  }


  return (
    <div className="h-screen w-full bg-cover bg-center bg-[url('https://i.ibb.co/Ss7dgSX/IMG-2051.jpg')] flex flex-col justify-around items-center">
      <windowState.Provider value={contextValue}>
        <Homepage/>
      </windowState.Provider>
    </div>
  )
}

export default Bg